import mongoose from "mongoose";

const Products = mongoose.model("Product", {
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: String,
  category: String,
  description: String,
});

export default Products;
