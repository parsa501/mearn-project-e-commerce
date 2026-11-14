
import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Collection title is required"],
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    products: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Collection = mongoose.model("Collection", CollectionSchema);

export default Collection;
