import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    cate_id: {
      type: ObjectId,
      ref: "categoris",
    },
    photo: {
      type: String,
    },
    check: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("products", productSchema);
