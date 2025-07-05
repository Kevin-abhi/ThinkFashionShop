🛍️ ThinkFashion – MERN Stack eCommerce Project
ThinkFashion is a full-featured, modern eCommerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT authentication, Stripe payment, Google login, and a powerful Admin Dashboard.

🔐 Users must log in to add products to the cart, view their cart, or purchase products.

📦 Live Deployment
Frontend: 
Backend: https://thinkfashion-nym4.onrender.com/
Database: MongoDB Atlas
👤 Admin Credentials
Email: thinkfashion@gmail.com
Password: abc123
📦 Tech Stack
Frontend: React.js, TailwindCSS, Redux, Flowbite, React Router
Backend: Node.js, Express.js
Database: MongoDB Atlas
Authentication: JWT, bcrypt, Google OAuth
Payment Gateway: Stripe
Image Upload: Cloudinary
Deployment: Frontend via Vercel/WebEyeSoft, Backend via Render
🚀 Key Features
✅ User Features
🔐 User authentication (Register/Login with JWT Auth or Google OAuth)
💡 Responsive web design with Light/Dark mode toggle
🛍 Browse categories: Men, Women, Kids
🆕 Section for new arrivals and latest trends
🔍 Product search & filter
🛒 Add/remove items in cart
✅ Protected cart access (Login required)
💳 Stripe payment integration
👤 User profile management (update profile/password)
📦 Track your orders (in progress)
💬 Comment/rating system on products
✅ Admin Features
🔐 Admin login (Email: thinkfashion@gmail.com, Password: abc123)
📊 Admin dashboard showing:
Total Users
Total Comments
Total Products
Recent Users
Product stats: added/updated/deleted
➕ Add/Edit/Delete products
👥 View all users and delete if required
💬 View/Delete any product comment
🧾 Payment record management
📦 Update order status (Processing → Shipped → Delivered)
🗑 Delete any order
🚫 Without login:

Users can't access cart
Users can't add/buy products
🛠️ Tech Stack
Layer	Technology
Frontend	React, Vite, TailwindCSS, DaisyUI
State	Redux Toolkit
Backend	Node.js, Express.js
Database	MongoDB (Mongoose)
Auth	JWT, Bcrypt, Google OAuth
Payment	Stripe
File Upload	MongodbAtals, Multer
Deployment	Vercel (frontend), Render (backend)
🧩 Folder Structure
.
├── client/                 # React Frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── App.jsx
│
├── api/                    # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
🚀 Getting Started Locally
1️⃣ Backend Setup
cd api
npm install
.env

PORT=8000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret
FRONTEND_URL=http://localhost:5173
npm run dev
2️⃣ Frontend Setup
cd client
npm install
.env

VITE_BACKEND_URL=http://localhost:8000
npm run dev
🌍 Deployment
🟣 Backend (Render)
Create Web Service on Render
Connect GitHub or manual deploy
Add .env variables
Start command: npm run dev
🟢 Frontend (Vercel)
Connect GitHub repo on Vercel
Add VITE_BACKEND_URL=https://your-backend-url.onrender.com in project settings
💳 Payment Integration
Integrated with Stripe Checkout
Users must log in before proceeding
Backend handles secure session creation
🧠 Features in Development
✅ Wishlist
✅ Order History
✅ Admin product analytics
✅ Product stock tracking
✅ Multi-image uploads
📧 Contact
Have questions or suggestions?

✉️ Email: abhishekpratap21nov@gmail.com
🌐 Portfolio: https://react-portfolio-psi-virid.vercel.app/
📜 License
This project is open-source under the MIT License.