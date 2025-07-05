// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./public/temp")
//     },
//     filename: function (req, file, cb) {
      
//       cb(null, file.originalname)
//     }
//   }) 



// export const upload = multer({ 
//   
//   storage, 
// })


// middleware/multer.middleware.js
import multer from "multer";

// Use memory storage so that file.buffer is available in controller
const storage = multer.memoryStorage();

export const upload = multer({ storage });
