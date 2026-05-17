import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        KubeCart 🚀
      </div>

      <div className="nav-links">

        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/cart">
          <button>Cart</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/signup">
          <button>Signup</button>
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;