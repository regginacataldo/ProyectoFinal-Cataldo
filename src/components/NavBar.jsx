import CartWidget from "./CartWidget";

const NavBar = () => {
return (
    <nav style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#222",
    color: "white"
    }}>
    
      {/* Logo */}
    <h2>Mi Tienda</h2>

      {/* Enlaces */}
    <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
    </ul>

      {/* Carrito */}
    <CartWidget />
    </nav>
);
};

export default NavBar;
