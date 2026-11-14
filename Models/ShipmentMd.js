
import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },

    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SellerProfile",
    },

    items: {
      type: Array,
      required: [true, "Shipment items are required"],
    },

    shippingMethod: {
      type: String,
      required: [true, "Shipping method is required"],
    },

    trackingCode: {
      type: String,
      default: "",
    },

    carrier: {
      type: String,
      default: "",
    },

    shippingCost: {
      type: Number,
      default: 0,
      min: [0, "Shipping cost must be positive"],
    },

    status: {
      type: String,
      enum: ["pending", "preparing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    shippedAt: {
      type: Date,
      default: null,
    },

    deliveredAt: {
      type: Date,
      default: null,
    },

    estimatedDelivery: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const Shipment = mongoose.model("Shipment", shipmentSchema);

export default Shipment;
