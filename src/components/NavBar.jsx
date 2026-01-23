import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo-perfume.png";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo Perfumería" className="navbar-logo" />

      <div>
        <Link to="/">Perfumes</Link>
        <Link to="/category/femeninos">Femeninos</Link>
        <Link to="/category/masculinos">Masculinos</Link>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;