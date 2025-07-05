// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { addToCart } from "../../redux/cart/cartSlice";

// const PremiumCard = ({ product }) => {
//   const productId = product._id;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const addToCartHandler = () => {
//     dispatch(addToCart(product));
//     navigate('/shoppingList')
//   };

//   const isProductInCart = cartItems.some((item) => item._id === productId);

//   return (
//     <div className="card dark:dark:bg-[rgb(16,23,42)] card-compact w-80 h-100 bg-base-100 shadow-xl">
//       <figure>
//         <Link to={`/product/${productId}`}>
//           <img src={product.productImage} alt="Shoes" />
//         </Link>
//       </figure>
//       <div className="card-body">
//         <Link to={`/product/${productId}`}>
//           <h2 className="card-title">{product.name}</h2>
//         </Link>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div className="card-actions flex justify-between">
//           <span className="mt-2 text-lg font-semibold">${product.price}</span>
//           <button
//             onClick={addToCartHandler}
//             disabled={isProductInCart}
//             className="btn btn-primary"
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumCard;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartSlice";

const PremiumCard = ({ product }) => {
  const productId = product._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isProductInCart = cartItems.some((item) => item._id === productId);

  const addToCartHandler = () => {
    if (!currentUser) {
      return navigate("/login");
    }
    dispatch(addToCart(product));
    navigate("/shoppingList");
  };

  return (
    <div className="card card-compact w-80 bg-base-100 shadow-md dark:bg-[rgb(16,23,42)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <figure className="overflow-hidden">
        <Link to={`/product/${productId}`}>
          <img
            src={product.productImage}
            alt={product.name}
            className="w-full h-72 object-cover"
          />
        </Link>
      </figure>

      <div className="card-body">
        <Link to={`/product/${productId}`}>
          <h2 className="card-title">{product.name}</h2>
        </Link>
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {product.description}
        </p>
        <div className="card-actions flex justify-between items-center">
          <span className="mt-2 text-lg font-semibold">${product.price}</span>
          <button
            onClick={addToCartHandler}
            disabled={isProductInCart}
            className={`btn btn-primary ${isProductInCart ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {isProductInCart ? "Added" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
