
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    listingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductListing",
    },

    productVariantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVariant",
    },

    cartQuantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be positive"],
    },

    priceAfterDiscount: {
      type: Number,
      required: [true, "Price after discount is required"],
      min: [0, "Price after discount must be positive"],
    },
  },
  { _id: false },
);

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    totalPrice: {
      type: Number,
      min: [0, "Total price must be positive"],
      default: 0,
    },

    totalPriceAfterDiscount: {
      type: Number,
      min: [0, "Total price after discount must be positive"],
      default: 0,
    },

    items: {
      type: [itemSchema],
      default: [],
    },
  },
  { timestamps: true },
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
