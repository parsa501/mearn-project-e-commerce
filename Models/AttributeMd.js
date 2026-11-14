
import mongoose from "mongoose";

const AttributeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Attribute title is required"],
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    categories: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
        },
      ],
      default: [],
    },

    type: {
      type: String,
      enum: ["String", "Number", "Boolean"],
      required: [true, "Attribute type is required"],
    },

    unit: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const Attribute = mongoose.model("Attribute", AttributeSchema);

export default Attribute;
