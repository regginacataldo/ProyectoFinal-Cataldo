import { Link } from "react-router-dom";

const Item = ({ id, name, price }) => {
return (
    <div>
    <h3>{name}</h3>
    <p>${price}</p>
    <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
);
};

export default Item;
