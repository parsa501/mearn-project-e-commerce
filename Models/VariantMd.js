
import mongoose from "mongoose";

const VariantSchema = new mongoose.Schema(
  {
    attributeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attribute",
    },

    value: {
      type: String,
      required: [true, "Variant value is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

const Variant = mongoose.model("Variant", VariantSchema);

export default Variant;
