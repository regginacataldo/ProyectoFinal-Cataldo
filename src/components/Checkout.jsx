import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
const { cart, totalPrice, clearAll } = useContext(CartContext);


const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: ""
});

const handleChange = (e) => {
    setBuyer({
    ...buyer,
    [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.phone || !buyer.email) {
    alert("Completá todos los campos");
    return;
    }

    console.log("Orden generada:", {
    buyer,
    items: cart,
    total: totalPrice()
    });

    alert("Compra realizada con éxito 💕");
    clearAll();
};

return (
    <div className="checkout">
    <h2>Finalizar compra</h2>

    <form onSubmit={handleSubmit} className="checkout-form">
        <input
        type="text"
        placeholder="Nombre"
        name="name"
        onChange={handleChange}
        />

        <input
        type="text"
        placeholder="Teléfono"
        name="phone"
        onChange={handleChange}
        />

        <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        />

        <button type="submit">Comprar</button>
    </form>
    </div>
);
};

export default Checkout;
