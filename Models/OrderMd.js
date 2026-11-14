
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    discountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
    },

    items: {
      type: Array,
      required: [true, "Items are required"],
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
    },

    totalDiscount: {
      type: Number,
      default: 0,
    },

    finalPrice: {
      type: Number,
      required: [true, "Final price is required"],
    },

    address: {
      type: Object,
      required: [true, "Address is required"],
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
