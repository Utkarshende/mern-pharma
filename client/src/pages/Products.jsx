import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Our Products</h2>

      {products.map((product) => (
        <div key={product._id} style={{ marginBottom: "20px" }}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <Link to={`/products/${product._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;