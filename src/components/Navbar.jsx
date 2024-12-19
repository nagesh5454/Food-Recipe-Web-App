import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/search/${input.trim()}`);
    }
  };

  return (
    <>
      <div
        className="nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          backgroundColor: "blue",
        }}
      >
        {/* Left Section */}
        <div className="left">
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <h1>React Recipe App</h1>
          </Link>
        </div>

        {/* Search Section */}
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search for a recipe..."
              style={{
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
          </form>
        </div>

        {/* Right Section */}
        <div className="right" style={{ display: "flex", gap: "1rem" }}>
          <Link
            to={`/category/indian`}
            className="link"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div>Indian</div>
          </Link>
          <Link
            to={`/category/american`}
            className="link"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div>American</div>
          </Link>
          <Link
            to={`/category/british`}
            className="link"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div>British</div>
          </Link>
          <Link
            to={`/category/chinese`}
            className="link"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div>Chinese</div>
          </Link>
          <Link
            to={`/category/thai`}
            className="link"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div>Thai</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
