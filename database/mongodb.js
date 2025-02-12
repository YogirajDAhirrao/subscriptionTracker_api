import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";
if (!DB_URI) {
  throw new Error("Please define mongodb uri");
}
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`connected to db in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
};

export default connectDB;
