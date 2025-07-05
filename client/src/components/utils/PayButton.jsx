// import React from "react";
// import { useSelector } from "react-redux";

// const PayButton = ({ cartItems }) => {
//   const { _id } = useSelector((state) => state.user.currentUser);
//   //console.log(cartItems);
//   const handleCheckout = () => {
//     fetch("https://e-commerce-app-pearl-six.vercel.app/api/stripe/create-checkout-session", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         cartItems,
//         userId: _id,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.url) {
//           console.log(data.url);
//           window.location.href = data.url;
//         } 
//       })
//       .catch((err) => console.log(err.message));
//   };

//   return (
//     <div>
//       <button
//         className="bg-[#333] text-white w-full py-3 mt-6 font-semibold text-center rounded-md"
//         onClick={() => handleCheckout()}
//       >
//         Proceed to checkout
//       </button>
//     </div>
//   );
// };

// export default PayButton;
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }) => {
  const { _id } = useSelector((state) => state.user.currentUser || {});
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!_id) {
      alert("Please login first to proceed to checkout.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8000/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems, userId: _id }),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url; // Redirect to Stripe checkout
      } else {
        throw new Error(data.error || "Stripe session creation failed");
      }
    } catch (error) {
      console.error("Checkout Error:", error.message);
      alert("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`bg-[#333] text-white w-full py-3 mt-6 font-semibold text-center rounded-md ${
          loading ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
};

export default PayButton;


