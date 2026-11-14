
import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      required: [true, "Notification title is required"],
      trim: true,
    },

    message: {
      type: String,
      required: [true, "Notification message is required"],
    },

    type: {
      type: String,
      required: [true, "Notification type is required"],
    },

    targetId: {
      type: mongoose.Schema.Types.ObjectId,
    },

    targetType: {
      type: String,
      enum: [
        "Product",
        "Ticket",
        "SellerApplication",
        "Payment",
        "Order",
      ],
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
