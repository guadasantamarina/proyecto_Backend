import mongoose from 'mongoose';

const connectionString = process.env.MONGO_ATLAS_SRV  || 'mongodb://localhost:27017/mydatabase'

export const initMongoDB = async () => {
  try {
    console.log('connecting to:');
    console.log(connectionString)
    await mongoose.connect(connectionString);

    console.log('connected!');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};