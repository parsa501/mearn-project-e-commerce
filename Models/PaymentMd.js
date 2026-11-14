
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    amount: {
      type: Number,
      required: [true, "Payment amount is required"],
      min: [0, "Payment amount must be positive"],
    },

    gateway: {
      type: String,
      required: [true, "Payment gateway is required"],
    },

    authority: {
      type: String,
      default: "",
    },

    refId: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    paymentDate: {
      type: Date,
      default: null,
    },

    errorMessage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
