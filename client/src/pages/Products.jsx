import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-10 text-blue-700">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {product.name}
            </h3>

            <p className="text-gray-600 mb-4">
              {product.category}
            </p>

            <Link
              to={`/products/${product._id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;