
import mongoose from "mongoose";

const ProductVariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    variants: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Variant",
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

const ProductVariant = mongoose.model(
  "ProductVariant",
  ProductVariantSchema,
);

export default ProductVariant;
