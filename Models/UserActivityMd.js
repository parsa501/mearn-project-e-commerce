
import mongoose from "mongoose";

const userActivitySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    activityType: {
      type: String,
      required: [true, "Activity type is required"],
    },

    targetId: {
      type: mongoose.Schema.Types.ObjectId,
    },

    targetType: {
      type: String,
      enum: ["ProductListing", "Comment", "Order", "Product"],
    },

    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const UserActivity = mongoose.model("UserActivity", userActivitySchema);

export default UserActivity;
