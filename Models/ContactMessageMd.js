
import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    phoneNumber: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
    },

    message: {
      type: String,
      required: [true, "Message is required"],
    },

    status: {
      type: String,
      enum: ["pending", "read", "answered", "closed"],
      default: "pending",
    },

    adminNote: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const ContactMessage = mongoose.model(
  "ContactMessage",
  contactMessageSchema,
);

export default ContactMessage;
