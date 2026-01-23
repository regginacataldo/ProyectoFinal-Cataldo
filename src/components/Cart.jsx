import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

if (cart.length === 0) {
    return (
    <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver a la tienda</Link>
    </div>
    );
}

return (
    <div className="cart">
    <h2>Tu carrito</h2>

    {cart.map(prod => (
        <div key={prod.id} className="cart-item">
        <img src={prod.image} alt={prod.title} />
        <div>
            <h4>{prod.title}</h4>
            <p>Cantidad: {prod.quantity}</p>
            <p>Subtotal: ${prod.price * prod.quantity}</p>
            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
        </div>
        </div>
    ))}

    <h3>Total: ${totalPrice()}</h3>

    <button onClick={clearCart}>Vaciar carrito</button>
    <Link to="/checkout">Finalizar compra</Link>
    </div>
);
};

export default Cart;
