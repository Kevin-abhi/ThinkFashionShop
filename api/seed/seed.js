// // seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "../src/models/product.model.js";

dotenv.config();

// Premium Women Collection Data
const products = [
//   {
// //     name: "Premium Wine Gown",
// //     description: "If a dog chews shoes whose shoes does he choose?",
// //     price: 100,
// //     stock: 10,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709488133/jh25ajs15g788gf4lykm.jpg",
// //     category: { name: "Women", type: "Premium" },
// //     color: ["Wine", "Red", "Black"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "Premium-Gowns-Goodsdream",
// //     description: "If a dog chews shoes whose shoes does he choose?",
// //     price: 100,
// //     stock: 10,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709480328/wcr797ejtfoqcxmursik.jpg",
// //     category: { name: "Women", type: "Premium" },
// //     color: ["Blue", "Red", "Black"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "Women's Gray Light Wash Skinny Leg Jeans",
// //     description: "If a dog chews shoes whose shoes does he choose?",
// //     price: 50,
// //     stock: 10,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709480482/zcgohjjum82nyzo14xi4.jpg",
// //     category: { name: "Women", type: "Premium" },
// //     color: ["Gray", "Black", "White"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "Summer Premium Embroidered Lawn Dresses 1",
// //     description: "If a dog chews shoes whose shoes does he choose?",
// //     price: 80,
// //     stock: 10,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709479892/rq0syo2pdsplinjqduv0.jpg",
// //     category: { name: "Women", type: "Premium" },
// //     color: ["Green", "Red", "Blue"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "Summer Premium Embroidered Lawn Dresses 2",
// //     description: "If a dog chews shoes whose shoes does he choose?",
// //     price: 60,
// //     stock: 10,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709479402/ddlxssvtdvumup4tevyc.jpg",
// //     category: { name: "Women", type: "Premium" },
// //     color: ["Purple", "Maroon", "Black"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "Womens Premium Tops",
// //     description: "If a dog chews shoes whose shoes does he choose?",
// //     price: 30,
// //     stock: 10,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709492325/aobn6p17ga380qvtp8do.webp",
// //     category: { name: "Women", type: "Premium" },
// //     color: ["Pink", "Beige", "White"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "Tailored Fit Sleeves Top",
// //     description: "If a dog chews shoes whose shoes does he choose?",
// //     price: 40,
// //     stock: 10,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709492816/lq3xb9kvem6e2h1gup6g.webp",
// //     category: { name: "Women", type: "Premium" },
// //     color: ["Sky Blue", "White", "Black"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "Women Premium Kurti Gown",
// //     description: "If a dog chews shoes whose shoes does he choose?",
// //     price: 70,
// //     stock: 10,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709492816/lq3xb9kvem6e2h1gup6g.webp",
// //     category: { name: "Women", type: "Premium" },
// //     color: ["Yellow", "Orange", "Red"],
// //     size: ["S", "M", "L"],
// //   },
// // ];

// // const seed = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGODB_URI, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });

// //     await Product.deleteMany({}); // optional: clears existing data
// //     await Product.insertMany(premiumProducts);

// //     console.log("✅ Premium Women Collection seeded successfully!");
// //     process.exit(0);
// //   } catch (error) {
// //     console.error("❌ Error seeding data:", error);
// //     process.exit(1);
// //   }
// // };

// // seed();


// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { Product } from "../src/models/product.model.js";

// dotenv.config();

// const products = [
//   // ✅ Jacket
// {
//   name: "Bomber Jacket",
//   description: "Stylish bomber jacket perfect for winter season.",
//   price: 40,
//   stock: 10,
//   productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710477636/cv1fo1su40ijfubq3djw.webp",
//   category: { name: "Jacket", type: "Men" },
//   color: ["Black"],
//   size: ["M", "L"],
// },

// // ✅ Hoodie
// {
//   name: "Stretch Zip Hoodie",
//   description: "Comfortable and stretchable full zip hoodie.",
//   price: 35,
//   stock: 8,
//   productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478604/h3fw9fw3meodqjqvqfqg.avif",
//   category: { name: "Hoodie", type: "Men" },
//   color: ["Gray"],
//   size: ["S", "M", "L"],
// },

// // ✅ Polo T-shirt
// {
//   name: "Classic Polo T-shirt",
//   description: "Premium cotton polo shirt with modern fit.",
//   price: 25,
//   stock: 12,
//   productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478742/jzinv1wyckaw7ibwxyvb.jpg",
//   category: { name: "Polo T-shirt", type: "Men" },
//   color: ["Navy"],
//   size: ["M", "L", "XL"],
// },

// // ✅ Panjabi
// {
//   name: "Men's Fusion Panjabi",
//   description: "Modern fusion style panjabi for formal occasions.",
//   price: 60,
//   stock: 15,
//   productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710482404/ujackmfqcstm8swz3end.jpg",
//   category: { name: "Panjabi", type: "Men" },
//   color: ["White"],
//   size: ["S", "M", "L", "XL"],
// },

// // ✅ Kids
// {
//   name: "Kids Cotton Trouser",
//   description: "Soft and breathable cotton trousers for kids.",
//   price: 18,
//   stock: 20,
//   productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710477557/svo1vvaqiqsi4dqoj5gv.webp",
//   category: { name: "Kids", type: "Trouser" },
//   color: ["Beige"],
//   size: ["S", "M", "L"],
// },

  // ✅ PREMIUM WOMEN COLLECTION
  // {
  //   name: "Premium Wine Gown",
  //   description: "Indulge in elegance with our Premium Wine Gown Collection for Women, where sophistication meets style in every stitch.",
  //   price: 100,
  //   stock: 10,
  //   productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709488133/jh25ajs15g788gf4lykm.jpg",
  //   category: { name: "Women", type: "Premium" },
  //   color: ["Wine"],
  //   size: ["S", "M", "L"],
  // },
   {
    name: "Premium-Gowns-Goodsdream",
    description: "Elegant gowns crafted with love and premium fabric.",
    price: 100,
    stock: 10,
    productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709480328/wcr797ejtfoqcxmursik.jpg",
    category: { name: "Women", type: "Premium" },
    color: ["Red"],
    size: ["S", "M", "L"],
  },
  {
    name: "Gray Light Wash Skinny Jeans",
    description: "Soft skinny jeans with light wash and stretchable fit.",
    price: 50,
    stock: 20,
    productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709480482/zcgohjjum82nyzo14xi4.jpg",
    category: { name: "Women", type: "Premium" },
    color: ["Gray"],
    size: ["M", "L"],
  },
  {
    name: "Embroidered Lawn Dress",
    description: "Breathable and beautiful summer embroidered lawn dress.",
    price: 80,
    stock: 15,
    productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709479892/rq0syo2pdsplinjqduv0.jpg",
    category: { name: "Women", type: "Premium" },
    color: ["Green"],
    size: ["S", "M"],
  },
  {
    name: "Women Premium Kurti Gown",
    description: "Stylish and traditional kurti gown perfect for festive wear.",
    price: 70,
    stock: 12,
    productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709479402/ddlxssvtdvumup4tevyc.jpg",
    category: { name: "Women", type: "Premium" },
    color: ["Blue"],
    size: ["M", "L"],
  },

// //   // ✅ UNIQUE COLLECTION
// //   {
// //     name: "Navy Blue Endi Silk Panjabi",
// //     description: "Navy blue ombre dyed and embroidered endi silk panjabi for premium occasions.",
// //     price: 60,
// //     stock: 20,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710482049/uqevoiuvyty9ywo0ajan.avif",
// //     category: { name: "Unique", type: "Ethnic" },
// //     color: ["Navy Blue"],
// //     size: ["S", "M", "L", "XL"],
// //   },
// //   {
// //     name: "STRAPLESS DRESS",
// //     description: "Luxurious strapless dress with fine satin finishing.",
// //     price: 70,
// //     stock: 15,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478742/jzinv1wyckaw7ibwxyvb.jpg",
// //     category: { name: "Unique", type: "Fashion" },
// //     color: ["Pink"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "SATIN MAXI SKIRT",
// //     description: "Satin maxi skirt with elegant silhouette and comfort.",
// //     price: 112,
// //     stock: 18,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478272/zq1no6i3w2lqzuif4tea.jpg",
// //     category: { name: "Unique", type: "Fashion" },
// //     color: ["Black"],
// //     size: ["S", "M", "L"],
// //   },

// //   // ✅ MEN COLLECTION
// //   {
// //     name: "MENS FUSION PANJABI",
// //     description: "Traditional panjabi with modern fusion cut.",
// //     price: 60,
// //     stock: 25,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710482404/ujackmfqcstm8swz3end.jpg",
// //     category: { name: "Men", type: "Panjabi" },
// //     color: ["White"],
// //     size: ["S", "M", "L", "XL"],
// //   },
// //   {
// //     name: "DRY PIQUÉ TIPPING POLO SHIRT",
// //     description: "Comfortable dry pique polo with tipping details.",
// //     price: 20,
// //     stock: 30,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478742/jzinv1wyckaw7ibwxyvb.jpg",
// //     category: { name: "Men", type: "Polo T-shirt" },
// //     color: ["Blue"],
// //     size: ["S", "M", "L"],
// //   },
// //   {
// //     name: "DRY Stretch Sweat Full-Zip Hoodie",
// //     description: "Stretchable hoodie with full zipper, ideal for winter.",
// //     price: 30,
// //     stock: 15,
// //     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478604/h3fw9fw3meodqjqvqfqg.avif",
// //     category: { name: "Men", type: "Hoodie" },
// //     color: ["Gray"],
// //     size: ["S", "M", "L"],
// //   },
//  ];

// const seedDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     // await Product.deleteMany({});
//     await Product.insertMany(products);
//     console.log("✅ All seed data inserted successfully!");
//     process.exit(0);
//   } catch (err) {
//     console.error("❌ Seeding failed:", err);
//     process.exit(1);
//   }
// };

// seedDB();
// seed.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { Product } from "../src/models/product.model.js";

// dotenv.config();

// const products = [
//   // ✅ Premium Women Collection
//   {
//     name: "Premium Wine Gown",
//     description: "Elegant premium gown for women.",
//     price: 100,
//     stock: 10,
//     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709488133/jh25ajs15g788gf4lykm.jpg",
//     category: { name: "Women", type: "Premium" },
//     color: ["Wine"],
//     size: ["S", "M", "L"],
//   },
//   {
//     name: "Womens Premium Tops",
//     description: "Stylish top for every occasion.",
//     price: 30,
//     stock: 10,
//     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1709492325/aobn6p17ga380qvtp8do.webp",
//     category: { name: "Women", type: "Premium" },
//     color: ["Pink"],
//     size: ["S", "M", "L"],
//   },

//   // ✅ Jacket
//   {
//     name: "Bomber Jacket",
//     description: "Stylish bomber jacket perfect for winter season.",
//     price: 40,
//     stock: 10,
//     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710477636/cv1fo1su40ijfubq3djw.webp",
//     category: { name: "Jacket", type: "Men" },
//     color: ["Black"],
//     size: ["M", "L"],
//   },

//   // ✅ Hoodie
//   {
//     name: "Stretch Zip Hoodie",
//     description: "Comfortable and stretchable full zip hoodie.",
//     price: 35,
//     stock: 8,
//     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478604/h3fw9fw3meodqjqvqfqg.avif",
//     category: { name: "Hoodie", type: "Men" },
//     color: ["Gray"],
//     size: ["S", "M", "L"],
//   },

//   // ✅ Polo T-shirt
//   {
//     name: "Classic Polo T-shirt",
//     description: "Premium cotton polo shirt with modern fit.",
//     price: 25,
//     stock: 12,
//     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478742/jzinv1wyckaw7ibwxyvb.jpg",
//     category: { name: "Polo T-shirt", type: "Men" },
//     color: ["Navy"],
//     size: ["M", "L", "XL"],
//   },

//   // ✅ Panjabi
//   {
//     name: "Men's Fusion Panjabi",
//     description: "Modern fusion style panjabi for formal occasions.",
//     price: 60,
//     stock: 15,
//     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710482404/ujackmfqcstm8swz3end.jpg",
//     category: { name: "Panjabi", type: "Men" },
//     color: ["White"],
//     size: ["S", "M", "L", "XL"],
//   },

//   // ✅ Kids
//   {
//     name: "Kids Cotton Trouser",
//     description: "Soft and breathable cotton trousers for kids.",
//     price: 18,
//     stock: 20,
//     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710477557/svo1vvaqiqsi4dqoj5gv.webp",
//     category: { name: "Kids", type: "Trouser" },
//     color: ["Beige"],
//     size: ["S", "M", "L"],
//   },
//   {
//     name: "Kids Maggie Top",
//     description: "Trendy Maggie-style top for kids.",
//     price: 22,
//     stock: 15,
//     productImage: "https://res.cloudinary.com/dzyrymvcd/image/upload/v1710478272/zq1no6i3w2lqzuif4tea.jpg",
//     category: { name: "Kids", type: "Maggie" },
//     color: ["Purple"],
//     size: ["S", "M"],
//   },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // Do NOT delete old data
    await Product.insertMany(products);
    console.log("✅ All seed data inserted successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedDB();
