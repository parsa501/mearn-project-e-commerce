import mongoose from "mongoose";

const SellerApplicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },

    sellerType: {
      type: String,
      enum: ["individual", "legal"],
      required: [true, "Seller type is required"],
    },

    storeName: {
      type: String,
      required: [true, "Store name is required"],
      trim: true,
    },

    ownerName: {
      type: String,
      required: [true, "Owner name is required"],
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
    },

    email: {
      type: String,
      default: "",
    },

    storeAddress: {
      type: String,
      required: [true, "Store address is required"],
    },

    postalCode: {
      type: String,
      required: [true, "Postal code is required"],
    },

    warehouseAddress: {
      type: String,
      default: "",
    },

    storeDescription: {
      type: String,
      default: "",
    },

    documents: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "revision"],
      default: "pending",
    },

    adminNote: {
      type: String,
      default: "",
    },

    revisionNote: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const SellerApplication = mongoose.model(
  "SellerApplication",
  SellerApplicationSchema,
);

export default SellerApplication;
