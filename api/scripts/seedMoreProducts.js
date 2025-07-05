// scripts/seedMoreProducts.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "../src/models/product.model.js";
import { User } from "../src/models/user.model.js";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB Atlas");

  const admin = await User.findOne({ email: "thinkfashion@gmail.com" });
  if (!admin) {
    console.error("❌ Admin user not found. Please ensure the admin exists.");
    process.exit(1);
  }

  const products = [
    // --- EXISTING 10 ---
    {
      name: "Winter Denim Jacket",
      description: "Stylish jacket with fleece lining for winter days.",
      price: 1799,
      stock: 80,
      productImage: "https://images.unsplash.com/photo-1618354691279-f1076e26163b",
      category: { name: "Jacket", type: "MEN" },
      color: ["black", "grey"],
      size: ["M", "L", "XL"],
      owner: admin._id,
    },
    {
      name: "Polo T-Shirt",
      description: "Casual polo with breathable cotton.",
      price: 749,
      stock: 60,
      productImage: "https://images.unsplash.com/photo-1618354690297-e9cd189b8fbb",
      category: { name: "Polo T-shirt", type: "MEN" },
      color: ["white", "blue"],
      size: ["M", "L"],
      owner: admin._id,
    },
    {
      name: "Sports Trouser",
      description: "Lightweight and moisture-wicking for workouts.",
      price: 899,
      stock: 70,
      productImage: "https://images.unsplash.com/photo-1621592480101-4b0cc2db132e",
      category: { name: "Sports Trouser", type: "MEN" },
      color: ["navy", "black"],
      size: ["M", "L", "XL"],
      owner: admin._id,
    },
    {
      name: "Royal Blue Gown",
      description: "Elegant satin gown for evening wear.",
      price: 2499,
      stock: 30,
      productImage: "https://images.unsplash.com/photo-1602810310434-80e621fdac5b",
      category: { name: "Gown", type: "WOMEN" },
      color: ["royal blue", "gold"],
      size: ["M", "L"],
      owner: admin._id,
    },
    {
      name: "Comfy Trouser",
      description: "Relaxed fit trousers for daily comfort.",
      price: 999,
      stock: 50,
      productImage: "https://images.unsplash.com/photo-1618353744321-e6c6f810d069",
      category: { name: "Comfy Trouser", type: "WOMEN" },
      color: ["beige", "black"],
      size: ["S", "M", "L"],
      owner: admin._id,
    },
    {
      name: "T-Shirt (Women)",
      description: "Slim-fit cotton t-shirt with vibrant color.",
      price: 699,
      stock: 65,
      productImage: "https://images.unsplash.com/photo-1592878849122-18c7a70d8a5d",
      category: { name: "T-Shirt", type: "WOMEN" },
      color: ["pink", "white"],
      size: ["S", "M"],
      owner: admin._id,
    },
    {
      name: "Cartoon Graphic T-Shirt",
      description: "Colorful tee for kids with fun prints.",
      price: 399,
      stock: 100,
      productImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      category: { name: "Half Sleeve T-Shirt", type: "KIDS" },
      color: ["yellow", "green"],
      size: ["S", "M"],
      owner: admin._id,
    },
    {
      name: "Maggie Dress",
      description: "Sleeveless cotton dress with floral design.",
      price: 599,
      stock: 40,
      productImage: "https://images.unsplash.com/photo-1623173544463-f6c0e63b839d",
      category: { name: "Maggie", type: "KIDS" },
      color: ["pink", "white"],
      size: ["S", "M"],
      owner: admin._id,
    },
    {
      name: "Kids Polo T-Shirt",
      description: "Soft, comfortable polo for playful days.",
      price: 449,
      stock: 80,
      productImage: "https://images.unsplash.com/photo-1620812099656-032d2c1ecb76",
      category: { name: "Polo T-Shirt", type: "KIDS" },
      color: ["red", "white"],
      size: ["S", "M"],
      owner: admin._id,
    },
    {
      name: "Trouser (Kids)",
      description: "Stretchable trousers for everyday use.",
      price: 499,
      stock: 60,
      productImage: "https://images.unsplash.com/photo-1617887401688-8d6cd1abcf91",
      category: { name: "Trouser", type: "KIDS" },
      color: ["black", "khaki"],
      size: ["S", "M"],
      owner: admin._id,
    },

    // --- 5 NEW PRODUCTS ---
    {
      name: "Full Sleeve Shirt",
      description: "Formal full-sleeve cotton shirt for office wear.",
      price: 1299,
      stock: 45,
      productImage: "https://images.unsplash.com/photo-1587049352849-bef0c70f54b2",
      category: { name: "Shirt", type: "MEN" },
      color: ["white", "sky blue"],
      size: ["M", "L", "XL"],
      owner: admin._id,
    },
    {
      name: "Half Sleeve T-shirt (Men)",
      description: "Basic half-sleeve tee with crew neck.",
      price: 599,
      stock: 85,
      productImage: "https://images.unsplash.com/photo-1623781333905-efad527da7b5",
      category: { name: "Half Sleeve T-shirt", type: "MEN" },
      color: ["black", "grey"],
      size: ["M", "L"],
      owner: admin._id,
    },
    {
      name: "Skirts",
      description: "Flared skirt with polka design for women.",
      price: 899,
      stock: 30,
      productImage: "https://images.unsplash.com/photo-1624278869246-b3b7072dca32",
      category: { name: "Skirts", type: "WOMEN" },
      color: ["red", "white"],
      size: ["S", "M"],
      owner: admin._id,
    },
    {
      name: "Hoodie (Men)",
      description: "Casual hoodie with warm fleece interior.",
      price: 1399,
      stock: 60,
      productImage: "https://images.unsplash.com/photo-1602810311964-1145f10a2b1e",
      category: { name: "Hoodie", type: "MEN" },
      color: ["black", "maroon"],
      size: ["M", "L", "XL"],
      owner: admin._id,
    },
    {
      name: "Panjabi (Men)",
      description: "Traditional Panjabi for festivals and functions.",
      price: 1699,
      stock: 25,
      productImage: "https://images.unsplash.com/photo-1635003914946-c5e48a338868",
      category: { name: "Panjabi", type: "MEN" },
      color: ["white", "cream"],
      size: ["M", "L"],
      owner: admin._id,
    }
  ];

  await Product.insertMany(products);
  console.log(`✅ ${products.length} products inserted successfully!`);
  process.exit();
} catch (error) {
  console.error("❌ Seeding error:", error.message);
  process.exit(1);
}
