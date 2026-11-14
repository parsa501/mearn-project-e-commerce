
import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Story title is required"],
      trim: true,
    },

    media: {
      type: String,
      required: [true, "Story media is required"],
    },

    mediaType: {
      type: String,
      enum: ["image", "video"],
      required: [true, "Media type is required"],
    },

    link: {
      type: String,
      default: "",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SellerProfile",
    },
  },
  { timestamps: true },
);

const Story = mongoose.model("Story", storySchema);

export default Story;
