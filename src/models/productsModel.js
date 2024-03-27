import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productModel = new Schema(
  {
    title: { type: String, maxLength: 255, require: true },
    slug: { type: String, require: true, unique: true },
    thumbnail: { type: String, require: true },
    images: [{ type: String }],
    price: { type: Number, require: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
    rating: { type: Number, require: true },
    description: { type: String, require: true },
  },
  { versionKey: false }
);

const Product = mongoose.model("Product", productModel);

export default Product;
