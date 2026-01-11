import { NextRequest, NextResponse } from "next/server";
import { User, EmailVerification } from "@/lib/models/auth.model";
import { Wallet } from "@/lib/models/wallet.model";
import bcrypt from "bcryptjs";

// Simple UUID generator to avoid dependency issues
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
import {
  validateEmail,
  validatePassword,
  generateEmailVerificationCode,
  hashCode,
  sendEmailVerification,
  checkRateLimit,
} from "@/lib/auth-utils";
import { connectDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password, firstName, selectedChallenge, multiplier } =
      await req.json();

    // Validate required fields
    if (!email || !password || !firstName) {
      console.error("Missing required fields:", { email: !!email, password: !!password, firstName: !!firstName });
      return NextResponse.json(
        { success: false, error: "Email, password, and firstName are required" },
        { status: 400 }
      );
    }

    // Validate email
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { success: false, error: passwordValidation.errors.join(". ") },
        { status: 400 }
      );
    }

    // Rate limiting
    if (!checkRateLimit(`signup_${email}`, 5, 60 * 60 * 1000)) {
      return NextResponse.json(
        { success: false, error: "Too many signup attempts. Please try again later." },
        { status: 429 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: "Email already registered",
        },
        { status: 409 }
      );
    }

    // Create new user
    // Create new user
    const userId = uuidv4();
    const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      userId: userId,
      email: email.toLowerCase(),
      firstName: firstName,
      lastName: firstName, // Using first name as last name for now
      passwordHash: hashedPassword, // Store hashed password
      referralCode: referralCode,
      emailVerified: false,
      accountStatus: 'active',
    });

    await user.save();

    // Determine daily saving amount based on challenge
    let dailySavingAmount = 27.4; // default daily
    if (selectedChallenge === "weekly") {
      dailySavingAmount = 191.80 / 7; // weekly divided by 7
    } else if (selectedChallenge === "monthly") {
      dailySavingAmount = 849.40 / 30; // monthly divided by 30
    }

    if (multiplier) {
      dailySavingAmount *= multiplier;
    }

    // Create wallet for new user
    await Wallet.create({
      userId: user._id.toString(),
      balance: 0,
      availableBalance: 0,
      locked: 0,
      lockedInPockets: 0,
      referralEarnings: 0,
      currentStreak: 0,
      dailySavingAmount: dailySavingAmount,
    });

    // Generate email verification code
    const verificationCode = generateEmailVerificationCode();
    const verificationHash = hashCode(verificationCode);

    await EmailVerification.create({
      userId: user._id,
      email: email.toLowerCase(),
      code: verificationCode,
      codeHash: verificationHash,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    // Send verification email
    await sendEmailVerification(email, verificationCode);

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully. Please verify your email.",
        data: {
          user: {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            emailVerified: user.emailVerified,
          },
          requiresEmailVerification: true,
          verificationCodeSent: true,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    
    // Handle E11000 duplicate key errors (especially for phoneNumber with null values)
    if (error instanceof Error && error.message.includes('E11000')) {
      console.error("E11000 Error details:", error.message);
      
      // If it's a phoneNumber duplicate key error
      if (error.message.includes('phoneNumber')) {
        return NextResponse.json(
          { success: false, error: "Database index issue. Please contact support. Error: PHONE_INDEX" },
          { status: 500 }
        );
      }
      
      // If it's an email duplicate (shouldn't happen, but just in case)
      if (error.message.includes('email')) {
        return NextResponse.json(
          { success: false, error: "Email already registered" },
          { status: 409 }
        );
      }
    }
    
    return NextResponse.json(
      { success: false, error: "An error occurred during signup. Please try again." },
      { status: 500 }
    );
  }
}
