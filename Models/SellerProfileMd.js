
import mongoose from "mongoose";

const SellerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      unique: true,
    },

    storeName: {
      type: String,
      required: [true, "Store name is required"],
      trim: true,
    },

    storeDescription: {
      type: String,
      default: "",
    },

    storeLogo: {
      type: String,
      default: "",
    },

    storeBanner: {
      type: String,
      default: "",
    },

    sellerType: {
      type: String,
      enum: ["individual", "legal"],
      required: [true, "Seller type is required"],
    },

    nationalId: {
      type: String,
      default: "",
    },

    businessAddress: {
      type: String,
      default: "",
    },

    postalCode: {
      type: String,
      default: "",
    },

    bankAccount: {
      cardNumber: {
        type: String,
        default: "",
      },
      accountNumber: {
        type: String,
        default: "",
      },
      shebaNumber: {
        type: String,
        default: "",
      },
      accountHolder: {
        type: String,
        default: "",
      },
    },

    status: {
      type: String,
      enum: ["active", "suspended", "inactive"],
      default: "active",
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true },
);

const SellerProfile = mongoose.model("SellerProfile", SellerProfileSchema);

export default SellerProfile;
