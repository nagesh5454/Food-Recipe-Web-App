

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "1.5rem 1rem",
        textAlign: "center",
      }}
    >
      {/* Top Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Links Section */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a
            href="/"
            style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}
          >
            About Us
          </a>
          <a
            href="/"
            style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}
          >
            Contact Us
          </a>
          <a
            href="/"
            style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}
          >
            Privacy Policy
          </a>
        </div>

        {/* Social Media Section */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "1.5rem" }}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "1.5rem" }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "1.5rem" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ marginTop: "1rem" }}>
        <p>&copy; 2024 React Recipe App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
