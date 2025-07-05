// import express from "express";
// import { upload } from "../middleware/multer.middleware.js";
// import multer from "multer";

// import {
//   avatarChange,
//   changeCurrentPassword,
//   changeProfiePicture,
//   deleteUser,
//   getUserById,
//   getUsers,
//   google,
//   loginUser,
//   logoutUser,
//   refreshAccessToken,
//   registerUser,
//   updateAccountDetails,
// } from "../controllers/user.controller.js";
// import {  } from "../middleware/auth.middleware.js";

// // Create a router instance
// const router = express.Router();

// const storage = new multer.memoryStorage();
// const uploads = multer({ storage });

// // Define routes
// router.route("/register").post(registerUser);

// router.route("/login").post(loginUser);
// router.route("/google").post(google);
// router.route("/logout").post(verifyJWT, logoutUser);
// router.route("/getUserById/:userId").get(getUserById);
// router.route("/refresh-token").post(refreshAccessToken);
// router.route("/change-password").post(verifyJWT, changeCurrentPassword);
// router.route("/update-account").patch(verifyJWT, updateAccountDetails);
// router.route("/avatar").patch(verifyJWT, uploads.single("avatar"), avatarChange);
// router.route("/getUsers").get(verifyJWT, getUsers);
// router.route("/deleteUser/:userId").delete(verifyJWT, deleteUser);

// export default router;
// routes/user.route.js
import express from "express";
import multer from "multer";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js"; // ✅ FIXED

import {
  avatarChange,
  changeCurrentPassword,
  changeProfiePicture,
  deleteUser,
  getUserById,
  getUsers,
  google,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
} from "../controllers/user.controller.js";

const router = express.Router();
const storage = new multer.memoryStorage();
const uploads = multer({ storage });

// ✅ Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google", google);
router.post("/logout", verifyJWT, logoutUser); // ✅ FIXED
router.get("/getUserById/:userId", getUserById);
router.post("/refresh-token", refreshAccessToken);
router.post("/change-password", verifyJWT, changeCurrentPassword);
router.patch("/update-account", verifyJWT, updateAccountDetails);
router.patch("/avatar", verifyJWT, uploads.single("avatar"), avatarChange);
router.get("/getUsers", verifyJWT, getUsers);
router.delete("/deleteUser/:userId", verifyJWT, deleteUser);

export default router;
