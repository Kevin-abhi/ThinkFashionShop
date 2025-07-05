// import mongoose, { Schema } from 'mongoose';

// const productSchema = new Schema({
//     description: {
//         type: String,
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     productImage: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         default: 0,
//     },
//     stock: {
//         default: 0,
//         type: Number,
//     },
//     category: {
//         name: {
//             type: String,
//             required: true,
//         },
//         type: {
//             type: String,
//             required: true,
//         },
//     },
//     owner: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     },
//     color: [{
//         type: String,
//     }],
//     size: [{
//         type: String,
//     }],

// }, { timestamps: true });

// export const Product = mongoose.model('Product', productSchema);
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      name: { type: String, required: true },  // e.g., Women, Men
      type: { type: String, required: true },  // e.g., Premium, Casual
    },
    color: {
      type: [String],
      required: true,
    },
    size: {
      type: [String],
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
