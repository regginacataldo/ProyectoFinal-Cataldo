import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const Checkout = () => {
const { cart, totalPrice, clearAll } = useContext(CartContext);

const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: ""
});

const [error, setError] = useState("");
const [orderId, setOrderId] = useState(null);

const handleChange = (e) => {
    setBuyer({
    ...buyer,
    [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.phone || !buyer.email) {
    setError("Todos los campos son obligatorios");
    return;
    }

    if (!buyer.email.includes("@")) {
    setError("El email no es válido");
    return;
    }

    setError("");

    const order = {
    buyer,
    items: cart,
    total: totalPrice(),
    date: serverTimestamp()
    };

    addDoc(collection(db, "orders"), order)
    .then((resp) => {
        setOrderId(resp.id);
        clearAll();
    })
    .catch(() => {
        setError("Hubo un error al generar la orden");
    });
};

if (orderId) {
    return (
    <div className="checkout">
        <h2>¡Gracias por tu compra! 💕</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
    </div>
    );
}

return (
    <div className="checkout">
    <h2>Finalizar compra</h2>

    {error && <p style={{ color: "red" }}>{error}</p>}

    <form onSubmit={handleSubmit} className="checkout-form">
        <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={buyer.name}
        onChange={handleChange}
        />

        <input
        type="text"
        placeholder="Teléfono"
        name="phone"
        value={buyer.phone}
        onChange={handleChange}
        />

        <input
        type="email"
        placeholder="Email"
        name="email"
        value={buyer.email}
        onChange={handleChange}
        />

        <button type="submit">Comprar</button>
    </form>
    </div>
);
};

export default Checkout;
