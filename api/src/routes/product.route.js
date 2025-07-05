 
// src/routes/product.route.js

import express from "express";
import {
  addProduct,
  getProductsByCategoryType,
  getAllProducts,
  searchProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  countProducts
} from "../controllers/product.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

// ✅ Add new product (Admin Only)
router.post("/addProduct", verifyJWT, upload.single("productImage"), addProduct);

// ✅ Get all products (with pagination and filters)
router.get("/all", getAllProducts);

// ✅ Search products
router.get("/search", searchProducts);

// ✅ Get products by category type (e.g., Men/Women/Kids)
router.get("/category/:selectedCategory", getProductsByCategoryType);

// ✅ Count products by category
router.get("/count", verifyJWT, countProducts);

// ✅ Update product (Admin only)
router.patch("/update/:productId", verifyJWT, upload.single("productImage"), updateProduct);

// ✅ Delete product (Admin only)
router.delete("/delete/:productId", verifyJWT, deleteProduct);

// ✅ Get product by ID (must be last to avoid route collision)
router.get("/:productId", getProductById);

export default router;

// import express from "express";
// import {
//   addProduct,
//   getProductsByCategoryType,
//   getAllProducts,
//   searchProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   countProducts
// } from "../controllers/product.controller.js";

// import { verifyJWT } from "../middleware/auth.middleware.js";
// import { upload } from "../middleware/multer.middleware.js";

// const router = express.Router();

// // ✅ Add new product (Admin Only)
// router.post("/addProduct", verifyJWT, upload.single("productImage"), addProduct);

// // ✅ Get all products (with pagination and filters)
// router.get("/all", getAllProducts);

// // ✅ Search products
// router.get("/search", searchProducts);

// // ✅ Get product by ID
// router.get("/:productId", getProductById);

// // ✅ Get products by category type (e.g., Men/Women/Kids)
// router.get("/category/:selectedCategory", getProductsByCategoryType);

// // ✅ Update product (Admin only)
// router.patch("/update/:productId", verifyJWT, upload.single("productImage"), updateProduct);

// // ✅ Delete product (Admin only)
// router.delete("/delete/:productId", verifyJWT, deleteProduct);

// // ✅ Count products by category
// router.get("/count", verifyJWT, countProducts);

// export default router;
