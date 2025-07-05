// import React, { useEffect, useState } from "react";
// import PremiumCard from "../card/PremiumCard";
// import Skeleton from "../card/Skeleton";

// const PremiumCollection = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("PremiumWomen");

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       setLoading(true); // Set loading to true before fetching products
//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/product/all?categoryName=${selectedCategory}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data.data);

//         setLoading(false);
//         // Set loading to false after 3 seconds
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };

//     fetchProductsByCategory();
//   }, [selectedCategory]);

//   return (
//     <div className="flex flex-col w-full  py-10 dark:bg-darkPurple">
//       <div>
//         <h2 className="py-10 text-center text-xl font-semibold bg-newarrival dark:text-gray-800 font-serif">
//           {" "}
//           Premium Women Collection{" "}
//         </h2>
//       </div>
//       <div className="flex flex-wrap justify-evenly gap-5 mt-5">
//         {loading ? (
//           <>
//             <Skeleton />
//             <Skeleton />
//             <Skeleton />
//             <Skeleton />
//           </>
//         ) : (
//           // Render products once data is fetched
//           products.map((product) => (
//             <PremiumCard key={product._id} product={product} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// // export default PremiumCollection;
// import React, { useEffect, useState } from "react";
// import PremiumCard from "../card/PremiumCard";
// import Skeleton from "../card/Skeleton";

// const PremiumCollection = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("PremiumWomen");

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/product/all?categoryName=${selectedCategory}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         // Use the correct key from backend, e.g., data.products
//         setProducts(data.products || []);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductsByCategory();
//   }, [selectedCategory]);

//   return (
//     <div className="flex flex-col w-full py-10 dark:bg-darkPurple">
//       <h2 className="py-10 text-center text-xl font-semibold bg-newarrival dark:text-gray-800 font-serif">
//         Premium Women Collection
//       </h2>
//       <div className="flex flex-wrap justify-evenly gap-5 mt-5">
//         {loading ? (
//           <>
//             <Skeleton />
//             <Skeleton />
//             <Skeleton />
//             <Skeleton />
//           </>
//         ) : Array.isArray(products) && products.length > 0 ? (
//           products.map((product) => (
//             <PremiumCard key={product._id} product={product} />
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PremiumCollection;



import React, { useEffect, useState } from "react";
import PremiumCard from "../card/PremiumCard";
import Skeleton from "../card/Skeleton";

const PremiumCollection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
  setLoading(true);
  try {
    const response = await fetch("http://localhost:8000/api/product/all");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    console.log("Fetched data:", data); // check what field contains the array

    const filtered = (data.products || []).filter(
      (product) =>
        product.category?.name === "Women" &&
        product.category?.type === "Premium"
    );

    setProducts(filtered);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    setLoading(false);
  }
};
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col w-full py-10 dark:bg-darkPurple">
      <h2 className="py-10 text-center text-xl font-semibold bg-newarrival dark:text-gray-800 font-serif">
        Premium Women Collection
      </h2>
      <div className="flex flex-wrap justify-evenly gap-5 mt-5">
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <PremiumCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default PremiumCollection;