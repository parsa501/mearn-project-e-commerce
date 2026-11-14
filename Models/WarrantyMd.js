
import mongoose from "mongoose";

const WarrantySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Warranty title is required"],
      trim: true,
    },

    companyName: {
      type: String,
      default: "",
      trim: true,
    },

    duration: {
      type: Number,
      default: 0,
      min: 0,
    },

    description: {
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

const Warranty = mongoose.model("Warranty", WarrantySchema);

export default Warranty;
