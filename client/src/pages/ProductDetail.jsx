import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p style={{ padding: "40px" }}>Loading...</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
};

export default ProductDetail;