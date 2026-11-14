
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Service title is required"],
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
