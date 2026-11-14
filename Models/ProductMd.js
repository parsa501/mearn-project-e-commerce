import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true,
    },

    slug: {
      type: String,
      required: [true, "Product slug is required"],
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: "",
    },

    images: {
      type: [String],
      default: [],
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },

    attributeValues: {
      type: [
        {
          attributeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Attribute",
          },
          value: {
            type: mongoose.Schema.Types.Mixed,
          },
        },
      ],
      default: [],
    },

    productVariantIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductVariant",
        },
      ],
      default: [],
    },

    defaultProductVariantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductVariant",
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    rateCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    userBoughtCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
