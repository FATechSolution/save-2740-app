/**
 * MongoDB Index Cleanup Script
 * Run this to fix E11000 duplicate key errors
 * 
 * Usage: npm run cleanup:indexes
 */

import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL || 'mongodb+srv://admin:admin@cluster0.tdf9l0r.mongodb.net/?appName=Cluster0';

async function cleanupIndexes() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    
    const usersCollection = mongoose.connection.collection('users');
    
    console.log('\n📋 Current indexes:');
    const indexes = await usersCollection.getIndexes();
    console.log(indexes);
    
    // Indexes to drop (sparse fields with unique constraint that cause E11000 errors)
    const indexesToDrop = ['phoneNumber_1', 'userId_1', 'referralCode_1', 'referredBy_1', 'kycStatus_1'];
    
    for (const indexName of indexesToDrop) {
      if (indexes[indexName]) {
        console.log(`\n🔄 Dropping ${indexName} index...`);
        try {
          await usersCollection.dropIndex(indexName);
          console.log(`✓ Successfully dropped ${indexName} index`);
        } catch (dropError) {
          console.warn(`Failed to drop ${indexName}:`, (dropError as Error).message);
        }
      } else {
        console.log(`\n✓ ${indexName} index does not exist (no action needed)`);
      }
    }
    
    console.log('\n📋 Updated indexes:');
    const updatedIndexes = await usersCollection.getIndexes();
    console.log(updatedIndexes);
    
    console.log('\n✅ Index cleanup complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during cleanup:', error);
    process.exit(1);
  }
}

cleanupIndexes();
