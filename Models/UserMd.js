import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      unique: [true, "Phone number must be unique"],
      required: [true, "Phone number is required"],
      match: [/^(?:\+98|0)?9\d{9}$/, "Invalid phone number"],
    },
    email: {
      type: String,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"],
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin", "superAdmin"],
      default: "user",
    },
    avatar: {
      type: String,
      default: "",
    },
    boughtProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    addressIds: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
      default: [],
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
    ratedProducts: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    lastSeen: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);

export default User;