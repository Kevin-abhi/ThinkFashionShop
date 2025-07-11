// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { addToCart } from "../../redux/cart/cartSlice";

// const PriceCard = ({ product }) => {
//   const productId = product._id;

//   const dispatch = useDispatch();

//   const cartItems = useSelector(state => state.cart.cartItems);

//   const addToCartHandler = () => {
//      dispatch(addToCart(product));
//   };

//   const isProductInCart = cartItems.some(item => item._id === productId);


//   return (
//     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-110">
//       <Link to={`/product/${productId}`} className="flex justify-center items-center">
//         <img
//           className="p-8 rounded-t-lg h-96"
//           src={product.productImage}
//           alt="product image"
//         />
//       </Link>
//       <div className="px-5 pb-5">
//         <Link to={`product/${productId}`}>
//           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//             {product.name}
//           </h5>
//         </Link>
//         <div className="flex items-center mt-2.5 mb-5">
//           <div className="flex items-center space-x-1 rtl:space-x-reverse">
//             <svg
//               className="w-4 h-4 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             {/* Add more rating stars here */}
//           </div>
//           <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//             5.0
//           </span>
//         </div>
//         <div className="flex items-center justify-between">
//           <span className="text-3xl font-bold text-gray-900 dark:text-white">
//             ${product.price}
//           </span>
//           <button
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             onClick={addToCartHandler}
//             disabled={isProductInCart}
//           >
//             {isProductInCart ? 'Already in Cart' : 'Add to Cart'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PriceCard;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartSlice";

const PriceCard = ({ product }) => {
  const productId = product._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const cartItems = useSelector(state => state.cart.cartItems);

  const isProductInCart = cartItems.some(item => item._id === productId);

  const addToCartHandler = () => {
    if (!currentUser) {
      return navigate("/login");
    }
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-110 transform transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${productId}`} className="flex justify-center items-center">
        <img
          className="p-8 rounded-t-lg h-96 object-contain"
          src={product.productImage}
          alt={product.name}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/product/${productId}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </Link>

        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            onClick={addToCartHandler}
            disabled={isProductInCart}
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
              isProductInCart ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isProductInCart ? "Already in Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
