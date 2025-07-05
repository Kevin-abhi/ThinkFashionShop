import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PriceCard from "../components/card/PriceCard";
import Skeleton from "../components/card/Skeleton";

const CategoryProducts = () => {
  const { subCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const decodedCategory = decodeURIComponent(subCategory); // e.g. "Polo T-shirt"

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8000/api/product/all?categoryName=${decodedCategory}`
        );
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [decodedCategory]);

  return (
    <div className="w-full py-10 dark:bg-darkPurple min-h-screen">
      <h2 className="text-center text-2xl font-bold mb-6 capitalize">
        {decodedCategory}
      </h2>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : products.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {products.map((product) => (
            <PriceCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No products found.</p>
      )}
    </div>
  );
};

export default CategoryProducts;

