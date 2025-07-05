// import Header from "./components/header/Header"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Product from "./pages/Product";
// import MenProductPage from "./pages/MenProductPage";
// import WomenProductPage from "./pages/WomenProductPage";
// import KidsProductPage from "./pages/KidsProductPage";
// import ShoppingList from "./pages/ShoppingList";
// import Admin from "./pages/admin/Admin";
// import AdminProduct from "./pages/admin/AdminProduct";
// import Dashboard from "./pages/Dashboard";
// import Footer from "./components/footer/Footer";
// import OnlyAdminPrivateRoute from "./components/admin/OnlyAdminPrivateRoute";
// import AddProduct from "./pages/admin/AddProduct";
// import AllProducts from "./pages/AllProducts";
// import EditPage from "./pages/admin/EditPage";
// import CheckoutSuccess from "./pages/CheckoutSuccess";
// import PrivateRoute from "./components/utils/PrivateRoute";
// import AutoScroll from "./components/utils/AutoScroll";
// import AdminLogin from "./pages/admin/AdminLogin";
// import AdminOrders from "./pages/admin/AdminOrders";
// import AdminUsers from "./pages/admin/AdminUsers";
// import AdminComments from "./pages/admin/AdminComments";

// function App() {
  

//   return (
//     <BrowserRouter>
//     <AutoScroll />
//     <Header />
//        <Routes>
//        <Route path="/" element={<Home />} />
//        <Route path="/login" element={<Login />} />
//        <Route path="/signup" element={<SignUp />} />
//         <Route path="/product/:productId" element={<Product />} />
//         <Route path="/products/:productName" element={<MenProductPage />} />
//         <Route path="/products/women/:productName" element={<WomenProductPage />} />
//         <Route path="/products/kids/:productName" element={<KidsProductPage />} /> 
//         <Route path="/shoppingList" element={<ShoppingList />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/admin/products" element={<AdminProduct />} />
//         <Route path="/search" element={<AllProducts />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//   <Route element={<OnlyAdminPrivateRoute />}>
//     <Route path="/admin" element={<Admin />} />
    
//     <Route path="/admin/products" element={<AdminProduct />} />
//     <Route path="/admin/orders" element={<AdminOrders />} />
//     <Route path="/admin/users" element={<AdminUsers />} />
//     <Route path="/admin/comments" element={<AdminComments />} />
//   </Route>
//   <Route path="/add-product" element={<AddProduct />} />
//   <Route path="/product/edit/:productId" element={<EditPage />} />
//         <Route path="/checkout-success" element={<CheckoutSuccess />} />
//         <Route element={<PrivateRoute /> }>
//           <Route path="/dashboard" element={<Dashboard />}/>
//         </Route>
//         <Route element={<OnlyAdminPrivateRoute />}>
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/product/edit/:productId" element={<EditPage />} />
//         </Route>
//       </Routes>     
//       <Footer /> 
//     </BrowserRouter>
   
//   )
// }

// export default App

// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AutoScroll from "./components/utils/AutoScroll";
import PrivateRoute from "./components/utils/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/admin/OnlyAdminPrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import MenProductPage from "./pages/MenProductPage";
import WomenProductPage from "./pages/WomenProductPage";
import KidsProductPage from "./pages/KidsProductPage";
import CategoryProducts from "./pages/CategoryProducts";
import ShoppingList from "./pages/ShoppingList";
import AllProducts from "./pages/AllProducts";
import Dashboard from "./pages/Dashboard";
import CheckoutSuccess from "./pages/CheckoutSuccess";

import AdminLogin from "./pages/admin/AdminLogin";
import Admin from "./pages/admin/Admin";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminComments from "./pages/admin/AdminComments";
import AddProduct from "./pages/admin/AddProduct";
import EditPage from "./pages/admin/EditPage";
import ProductCard from "./components/card/ProductCard";

function App() {
  return (
    <BrowserRouter>
      <AutoScroll />
      <Header />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/products/:productName" element={<MenProductPage />} />
        <Route path="/products/women/:productName" element={<WomenProductPage />} />
        <Route path="/products/kids/:productName" element={<KidsProductPage />} />
        <Route path="/products/:subCategory" element={<CategoryProducts />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route path="/search" element={<AllProducts />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />

        {/* Admin Login Route (Public) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/comments" element={<AdminComments />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/edit/:productId" element={<EditPage />} />
        </Route>

        {/* User Private Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

/*
<Header />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/products/:productName" element={<MenProductPage />} />
        <Route path="/products/women/:productName" element={<WomenProductPage />} />
        <Route path="/products/kids/:productName" element={<KidsProductPage />} /> 
        <Route path="/shoppingList" element={<ShoppingList />} />
        <Route element={<PrivateRoute /> }>
          <Route path="/profile" element={<Profile />}/>
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
 */