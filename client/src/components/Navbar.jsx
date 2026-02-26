import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "20px", background: "#1e3a8a", color: "white" }}>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
      <Link to="/products" style={{ color: "white" }}>Products</Link>
    </nav>
  );
};

export default Navbar;