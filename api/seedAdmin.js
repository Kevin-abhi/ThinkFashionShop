import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './src/models/user.model.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

const seedAdmin = async () => {
  await connectDB();

  const adminEmail = 'thinkfashion@gmail.com';
  const existingAdmin = await User.findOne({ email: adminEmail });

  if (existingAdmin) {
    console.log('⚠️ Admin already exists');
    process.exit();
  }

  const adminUser = new User({
    username: 'admin',
    fullName: 'Admin ThinkFashion',
    email: adminEmail,
    password: 'abc123',  // 👈 plain password, will be hashed automatically
    isAdmin: true,
  });

  await adminUser.save();
  console.log('✅ Admin user created successfully');
  process.exit();
};

seedAdmin();
