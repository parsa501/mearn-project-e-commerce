
import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      default: "",
      trim: true,
    },

    recipientName: {
      type: String,
      required: [true, "Recipient name is required"],
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
    },

    province: {
      type: String,
      required: [true, "Province is required"],
    },

    city: {
      type: String,
      required: [true, "City is required"],
    },

    address: {
      type: String,
      required: [true, "Address is required"],
    },

    postalCode: {
      type: String,
      required: [true, "Postal code is required"],
    },

    plaque: {
      type: String,
      default: "",
    },

    unit: {
      type: String,
      default: "",
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [],
      },
    },

    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

AddressSchema.index({ location: "2dsphere" });

const Address = mongoose.model("Address", AddressSchema);

export default Address;
