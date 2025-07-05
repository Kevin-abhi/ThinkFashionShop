// import express from "express"
// import cors from 'cors'
// import cookieParser from "cookie-parser"

// const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))



// app.use(express.json({limit: "50mb"}))
// app.use(express.urlencoded({extended: true, limit: "50mb"}))
// app.use(express.static("public"))
// app.use(cookieParser())

// // routes import
// import userRouter from "./routes/user.route.js"
// import productRouter from "./routes/product.route.js"
// import stripe from "./routes/stripe.js"
// import orderRouter from "./routes/order.route.js"
// import commentRouter from "./routes/comment.route.js"

// app.use("/api/users", userRouter);
// app.use("/api/product", productRouter);
// app.use("/api/stripe", stripe);
// app.use("/api/order", orderRouter);
// app.use("/api/comment", commentRouter);

// export { app }

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import stripe from "./routes/stripe.js";
import orderRouter from "./routes/order.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();

// ✅ Handle multiple allowed CORS origins
const allowedOrigins = (process.env.CORS_ORIGIN || "").split(",");
console.log("Allowed CORS origins:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ✅ Mount routes
app.use("/api/users", userRouter);
app.use("/api/product", productRouter);
app.use("/api/stripe", stripe);
app.use("/api/order", orderRouter);
app.use("/api/comment", commentRouter);

export { app };


 
// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// const app = express();

// // Allow multiple origins
// const allowedOrigins = process.env.CORS_ORIGIN.split(",");

// app.use(cors({
//   origin: function (origin, callback) {
//     // allow requests with no origin (like mobile apps or curl)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     } else {
//       return callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// }));

// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(express.static("public"));
// app.use(cookieParser());

// Routes
 


