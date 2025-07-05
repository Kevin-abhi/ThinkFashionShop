// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { json, useParams } from "react-router-dom";

// const EditPage = () => {
//   const { productId } = useParams();
//   const { accessToken } = useSelector((state) => state.user);
//   const [loading, setLoading] = useState(false);
 
//   const [productData, setProductData] = useState({
//     name: "",
//     description: "",
//     productImage: null,
//     price: "",
//     stock: "",
//     categoryName: "",
//     categoryType: "",
//     color: "",
//     size: "",
//   });

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/product/getProduct/${productId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch product");
//         }
//         const data = await response.json();
//         const {
//           name,
//           description,
//           price,
//           stock,
//           category,
//           productImage,
//           color,
//           size,
//         } = data.data;
//         setProductData({
//           name,
//           description,
//           price,
//           stock,
//           productImage,
//           categoryName: category.name,
//           categoryType: category.type,
//           color: Array.isArray(color) ? color.join(", ") : color,
//           size: Array.isArray(size) ? size.join(", ") : size,
//         });
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleChange = (e) => {
//     setProductData({
//       ...productData,
//       [e.target.name]: e.target.value,
//     });
//   };

  

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]; 
//     if (file) {
//       setProductData({
//         ...productData,
//         productImage: file, 
//       });
      
//     }
//   };
   
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const {
//       name,
//       description,
//       price,
//       stock,
//       categoryName,
//       categoryType,
//       color,
//       size,
//       productImage,
//     } = productData;
    
    

//     const data = new FormData();
//     data.append("name", name);
//     data.append("description", description);
//     data.append("price", price);
//     data.append("stock", stock);
//     data.append("category[name]", categoryName);
//     data.append("category[type]", categoryType);
//     data.append("color", color);
//     data.append("size", size);
//     data.append("productImage", productImage);

//     try {
//       const response = await fetch(`http://localhost:8000/api/product/updateProduct/${productId}`, {
//         method: "PATCH",
//         headers: {
//           Authorization: accessToken ? `Bearer ${accessToken}` : "",
//         },
//         body: data,
//       });

//       const responseData = await response.json();
      
//       if (response.ok) {
//         setLoading(false);
//         alert("Product updated successfully!");
//         const {
//           name,
//           description,
//           price,
//           stock,
//           category,
//           productImage,
//           color,
//           size,
//         } = responseData.data;
//         setProductData({
//           name,
//           description,
//           price,
//           stock,
//           productImage,
//           categoryName: category.name,
//           categoryType: category.type,
//           color: Array.isArray(color) ? color.join(", ") : color,
//           size: Array.isArray(size) ? size.join(", ") : size,
//         });
//       } else {
//         throw new Error(
//           responseData.message || "Failed to update product"
//         );
//       }
      
//     } catch (error) {
//       console.error("Error updating product:", error.message);
//       alert("Failed to update product: " + error.message);
//     }

//   }


//   return (
//     <div className="py-32 flex flex-col justify-center items-center dark:text-gray-50 dark:bg-gray-900">
//       <h1 className="text-xl font-semibold">Edit Product</h1>
//       <div>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5 dark:text-black">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             className="input input-bordered input-accent w-80 md:w-96"
//             value={productData.name}
//             onChange={handleChange}
//           />
//           <textarea
//             name="description"
//             className="textarea textarea-accent"
//             placeholder="Product Description"
//             onChange={handleChange}
//             value={productData.description}
//           ></textarea>
//            {/* Display the productImage */}
//           {productData.productImage && (
//             <img
//               src={productData.productImage}
//               alt="Product Preview"
//               className="w-20 h-20 rounded-full cursor-pointer"
//             />
//           )}
//           <input
//             type="file"
//             name="productImage"
//             accept="image/*"
//             className="file-input file-input-bordered w-80 md:w-96"
//             onChange={handleImageChange}
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Product Price"
//             className="input input-bordered input-accent w-80 md:w-96"
//             onChange={handleChange}
//             value={productData.price}
//           />
//           <input
//             type="number"
//             name="stock"
//             placeholder="Product Stock"
//             className="input input-bordered input-accent w-80 md:w-96"
//             onChange={handleChange}
//             value={productData.stock}
//           />
//           <input
//             type="text"
//             name="categoryName"
//             placeholder="Product Category Name"
//             className="input input-bordered input-accent w-80 md:w-96"
//             onChange={handleChange}
//             value={productData.categoryName}
//           />
//           <input
//             type="text"
//             name="categoryType"
//             placeholder="Product Category Type"
//             className="input input-bordered input-accent w-80 md:w-96"
//             onChange={handleChange}
//             value={productData.categoryType}
//           />

//           <input
//             type="text"
//             name="color"
//             placeholder="Product Color"
//             className="input input-bordered input-accent w-80 md:w-96"
//             onChange={handleChange}
//             value={productData.color}
//           />
//           <input
//             type="text"
//             name="size"
//             id="size"
//             placeholder="Product Size"
//             className="input input-bordered input-accent w-80 md:w-96"
//             onChange={handleChange}
//             value={productData.size}
//           />
//           <button type="submit" class="btn btn-neutral">
//           {loading ? "Loading..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default EditPage;

// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";

// // const EditPage = () => {
// //   const { productId } = useParams();
// //   const navigate = useNavigate();
// //   const { currentUser, accessToken } = useSelector((state) => state.user);

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     description: "",
// //     price: "",
// //     category: "",
// //     productImage: "",
// //   });

// //   const [imagePreview, setImagePreview] = useState("");
// //   const [imageFile, setImageFile] = useState(null);

// //   const root = "http://localhost:8000/api";

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await fetch(`${root}/product/${productId}`);
// //         const data = await res.json();
// //         if (res.ok) {
// //           setFormData({
// //             name: data.name,
// //             description: data.description,
// //             price: data.price,
// //             category: data.category.name,
// //             productImage: data.productImage,
// //           });
// //           setImagePreview(data.productImage);
// //         } else {
// //           throw new Error("Failed to load product");
// //         }
// //       } catch (err) {
// //         console.error("Error loading product:", err.message);
// //       }
// //     };

// //     if (currentUser?.isAdmin && accessToken) {
// //       fetchProduct();
// //     } else {
// //       navigate("/");
// //     }
// //   }, [productId, currentUser, accessToken, navigate]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setImageFile(file);
// //       setImagePreview(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const updateData = new FormData();
// //       updateData.append("name", formData.name);
// //       updateData.append("description", formData.description);
// //       updateData.append("price", formData.price);
// //       updateData.append("category", formData.category);
// //       if (imageFile) {
// //         updateData.append("productImage", imageFile);
// //       }

// //       const res = await fetch(`${root}/product/updateProduct/${productId}`, {
// //         method: "PATCH",
// //         headers: {
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //         body: updateData,
// //       });

// //       if (!res.ok) {
// //         const text = await res.text();
// //         throw new Error(text || "Update failed");
// //       }

// //       alert("Product updated successfully!");
// //       navigate("/dashboard?tab=products");
// //     } catch (err) {
// //       console.error("Error updating product:", err.message);
// //       alert("Failed to update product: " + err.message);
// //     }
// //   };

// //   return (
// //     <div className="max-w-xl mx-auto p-5 mt-8 dark:bg-gray-900 rounded-md shadow-md">
// //       <h2 className="text-xl font-semibold text-center mb-5">Edit Product</h2>
// //       <form onSubmit={handleUpdate} className="flex flex-col gap-4">
// //         <input
// //           className="border p-2 rounded"
// //           type="text"
// //           name="name"
// //           placeholder="Product Name"
// //           value={formData.name}
// //           onChange={handleInputChange}
// //           required
// //         />
// //         <textarea
// //           className="border p-2 rounded"
// //           name="description"
// //           placeholder="Description"
// //           rows="4"
// //           value={formData.description}
// //           onChange={handleInputChange}
// //           required
// //         ></textarea>
// //         <input
// //           className="border p-2 rounded"
// //           type="number"
// //           name="price"
// //           placeholder="Price"
// //           value={formData.price}
// //           onChange={handleInputChange}
// //           required
// //         />
// //         <input
// //           className="border p-2 rounded"
// //           type="text"
// //           name="category"
// //           placeholder="Category"
// //           value={formData.category}
// //           onChange={handleInputChange}
// //           required
// //         />
// //         <input
// //           className="border p-2 rounded"
// //           type="file"
// //           accept="image/*"
// //           onChange={handleImageChange}
// //         />
// //         {imagePreview && (
// //           <img
// //             src={imagePreview}
// //             alt="Preview"
// //             className="w-full h-48 object-cover rounded"
// //           />
// //         )}
// //         <button
// //           type="submit"
// //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //         >
// //           Update Product
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditPage;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    productImage: null,
    price: "",
    stock: "",
    categoryName: "",
    categoryType: "",
    color: "",
    size: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/product/${productId}`);
        if (!response.ok) throw new Error("Failed to fetch product");

        const data = await response.json();
        const {
          name,
          description,
          price,
          stock,
          category,
          productImage,
          color,
          size,
        } = data.data;

        setProductData({
          name,
          description,
          price,
          stock,
          productImage: null, // for new image
          categoryName: category.name,
          categoryType: category.type,
          color: Array.isArray(color) ? color.join(", ") : color,
          size: Array.isArray(size) ? size.join(", ") : size,
        });
        setImagePreview(productImage); // existing image preview
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  // Handle form field changes
  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData({ ...productData, productImage: file });
      setImagePreview(URL.createObjectURL(file)); // preview new image
    }
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", productData.name);
    data.append("description", productData.description);
    data.append("price", productData.price);
    data.append("stock", productData.stock);
    data.append("category[name]", productData.categoryName);
    data.append("category[type]", productData.categoryType);
    data.append("color", productData.color);
    data.append("size", productData.size);
    if (productData.productImage) {
      data.append("productImage", productData.productImage);
    }

    try {
      const response = await fetch(`http://localhost:8000/api/product/update/${productId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Product updated successfully!");
        navigate("/dashboard?tab=products");
      } else {
        throw new Error(result.message || "Failed to update product");
      }
    } catch (error) {
      alert("❌ Error: " + error.message);
      console.error("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-28 flex flex-col items-center dark:text-white dark:bg-gray-900 min-h-screen px-4">
      <h1 className="text-2xl font-semibold mb-6">Edit Product</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 dark:text-black">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="input input-bordered input-accent w-full"
          value={productData.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="textarea textarea-accent"
          placeholder="Product Description"
          onChange={handleChange}
          value={productData.description}
        ></textarea>

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Product"
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
        )}

        <input
          type="file"
          name="productImage"
          accept="image/*"
          className="file-input file-input-bordered w-full"
          onChange={handleImageChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Product Price"
          className="input input-bordered input-accent w-full"
          value={productData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Product Stock"
          className="input input-bordered input-accent w-full"
          value={productData.stock}
          onChange={handleChange}
        />
        <input
          type="text"
          name="categoryName"
          placeholder="Category Name"
          className="input input-bordered input-accent w-full"
          value={productData.categoryName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="categoryType"
          placeholder="Category Type"
          className="input input-bordered input-accent w-full"
          value={productData.categoryType}
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Colors (comma-separated)"
          className="input input-bordered input-accent w-full"
          value={productData.color}
          onChange={handleChange}
        />
        <input
          type="text"
          name="size"
          placeholder="Sizes (comma-separated)"
          className="input input-bordered input-accent w-full"
          value={productData.size}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-neutral w-full">
          {loading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditPage;
