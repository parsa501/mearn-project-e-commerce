
import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Banner title is required"],
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      required: [true, "Banner image is required"],
    },

    link: {
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

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
