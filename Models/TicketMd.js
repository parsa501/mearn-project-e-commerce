
import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    subject: {
      type: String,
      required: [true, "Ticket subject is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Ticket category is required"],
    },

    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    status: {
      type: String,
      enum: ["open", "inProgress", "answered", "closed"],
      default: "open",
    },
  },
  { timestamps: true },
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
