import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
const { addToCart } = useContext(CartContext);
const [added, setAdded] = useState(false);

const handleAdd = (quantity) => {
addToCart(product, quantity);
setAdded(true);
};


return (
    <div className="item-detail">
    <div className="item-detail-content">

        <img
        src={product.image}
        alt={product.name}
        className="item-detail-img"
        />

        <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="item-detail-price">${product.price}</p>

        {!added ? (
            <ItemCount
            stock={product.stock}
            initial={1}
            onAdd={handleAdd}
            />
        ) : (
            <Link to="/cart" className="go-cart-btn">
            Ir al carrito
            </Link>
        )}
        </div>

    </div>
    </div>
);
};

export default ItemDetail;
