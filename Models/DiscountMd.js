
import mongoose from "mongoose";

const discountSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Discount code is required"],
      unique: [true, "Discount code must be unique"],
      trim: true,
      uppercase: true,
    },

    discountType: {
      type: String,
      enum: ["percentage", "amount"],
      required: [true, "Discount type is required"],
    },

    value: {
      type: Number,
      required: [true, "Discount value is required"],
      min: [0, "Discount value must be positive"],
    },

    startTime: {
      type: Date,
      required: [true, "Start time is required"],
    },

    expireTime: {
      type: Date,
      required: [true, "Expire time is required"],
    },

    minPrice: {
      type: Number,
      min: [0, "Minimum price must be positive"],
      default: 0,
    },

    maxDiscount: {
      type: Number,
      min: [0, "Maximum discount must be positive"],
      default: null,
    },

    userIdsUsed: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Discount = mongoose.model("Discount", discountSchema);

export default Discount;
