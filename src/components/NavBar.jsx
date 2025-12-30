import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Mi Tienda</Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/calzado">Calzado</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
