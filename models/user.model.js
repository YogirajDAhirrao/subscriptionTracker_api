import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user name is requried"],
      trim: true,
      minLength: 2,
      maxLength: 10,
    },
    email: {
      type: String,
      required: true,
      uniqure: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "PLEASE FILL A VALID EMAIL"],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
