import { Link } from "react-router-dom";

const Item = ({ id, name, price, image }) => {
    console.log("Imagen:", image);
    return (
        <div className="item-card">
            <img src={image} alt={name} className="item-image" />
            <h3>{name}</h3>
            <p>${price}</p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    );
};
export default Item;
