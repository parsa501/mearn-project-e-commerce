
import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    productIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
