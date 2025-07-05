// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetchProducts(selectedCategory);
//   }, [selectedCategory]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

// const fetchProducts = async (category) => {
//     try {
//       let url;
//       if (category === 'All') {
//         url = 'http://localhost:8000/api/product/getAllProducts?categoryType=Men';
//       } else {
//         url = `http://localhost:8000/api/product/getAllProducts?categoryName=${category}`;
//       }
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       setImages(data.products);
//     } catch (error) {
//       console.error(error);
//     }
//   };

  

//   return (
//     <div className="py-10 w-full dark:bg-[rgb(16,23,42)] ">
//       <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
//         <button
//           type="button"
//           className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
//           onClick={() => handleCategoryClick("All")}
//         >
//           All categories
//         </button>
//         <button
//           type="button"
//           className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
//           onClick={() => handleCategoryClick("Jacket")}
//         >
//           Jacket
//         </button>
//         <button
//           type="button"
//           className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
//           onClick={() => handleCategoryClick("Hoodie")}
//         >
//           Hoodie
//         </button>
//         <button
//           type="button"
//           className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
//           onClick={() => handleCategoryClick("polo-t-shirt")}
//         >
//           Polo T-shirt
//         </button>
//         <button
//           type="button"
//           className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
//           onClick={() => handleCategoryClick("Panjabi")}
//         >
//           Panjabi
//         </button>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-16">
//       {images.map((img) => (
//           <Link key={img._id} to={`/product/${img._id}`} className="mx-auto">
//             <img className="h-80 w-80 rounded-lg" src={img.productImage} alt={img.name} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Utility to shuffle array (Fisher-Yates Shuffle)
const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchProducts = async (category) => {
    try {
      let url;
      if (category === "All") {
        url = "http://localhost:8000/api/product/all";
      } else {
        url = `http://localhost:8000/api/product/all?categoryName=${encodeURIComponent(category)}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      const shuffled = shuffleArray(data.products || []);
      setImages(shuffled);
    } catch (error) {
      console.error("Error fetching gallery products:", error);
    }
  };

  return (
    <div className="py-10 w-full dark:bg-[rgb(16,23,42)]">
      {/* Category Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {["All", "Jacket", "Hoodie", "Polo T-shirt", "Panjabi"].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-16">
        {images.length > 0 ? (
          images.slice(0, 6).map((img) => (
            <Link
              key={img._id}
              to={`/product/${img._id}`}
              className="mx-auto transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="h-80 w-80 rounded-lg object-cover"
                src={img.productImage}
                alt={img.name}
              />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetchProducts(selectedCategory);
//   }, [selectedCategory]);

//   const fetchProducts = async (category) => {
//     try {
//       let url;
//       if (category === "All") {
//         url = "http://localhost:8000/api/product/all";
//       } else {
//         url = `http://localhost:8000/api/product/all?categoryName=${encodeURIComponent(category)}`;
//       }

//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }

//       const data = await response.json();
//       setImages(data.products || []);
//     } catch (error) {
//       console.error("Error fetching gallery products:", error);
//     }
//   };

//   return (
//     <div className="py-10 w-full dark:bg-[rgb(16,23,42)]">
//       <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
//         {["All", "Jacket", "Hoodie", "Polo T-shirt", "Panjabi"].map((cat) => (
//           <button
//             key={cat}
//             type="button"
//             onClick={() => setSelectedCategory(cat)}
//             className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-16">
//         {images.length > 0 ? (
//           images.map((img) => (
//             <Link key={img._id} to={`/product/${img._id}`} className="mx-auto">
//               <img className="h-80 w-80 rounded-lg" src={img.productImage} alt={img.name} />
//             </Link>
//           ))
//         ) : (
//           <p className="text-center col-span-3 text-gray-500">No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gallery;


 