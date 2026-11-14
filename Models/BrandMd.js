
import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Brand title is required"],
      trim: true,
    },

    logo: {
      type: String,
      default: "",
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

const Brand = mongoose.model("Brand", BrandSchema);

export default Brand;
