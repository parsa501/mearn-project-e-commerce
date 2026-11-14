
import mongoose from "mongoose";

const ProductListingSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SellerProfile",
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    productVariantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVariant",
      default: null,
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
    },

    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: 0,
      default: 0,
    },

    warrantyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warranty",
      default: null,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const ProductListing = mongoose.model(
  "ProductListing",
  ProductListingSchema,
);

export default ProductListing;
