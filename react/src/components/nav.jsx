import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#282c34",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2>MyApp</h2>

        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: 0,
          }}
        >
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" style={{ color: "white", textDecoration: "none" }}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

    </>
  );
}

export default Nav;