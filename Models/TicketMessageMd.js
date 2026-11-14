
import mongoose from "mongoose";

const ticketMessageSchema = new mongoose.Schema(
  {
    ticketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    senderRole: {
      type: String,
      enum: ["user", "admin", "superAdmin"],
      required: [true, "Sender role is required"],
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

const TicketMessage = mongoose.model(
  "TicketMessage",
  ticketMessageSchema,
);

export default TicketMessage;
