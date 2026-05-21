import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "18px 35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          margin: 0,
          color: "#60a5fa",
          fontSize: "24px",
        }}
      >
        ATS Dashboard
      </h2>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>

        <Link to="/jobs" style={linkStyle}>
          Jobs
        </Link>

        <Link to="/candidates" style={linkStyle}>
          Candidates
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
};

export default Navbar;