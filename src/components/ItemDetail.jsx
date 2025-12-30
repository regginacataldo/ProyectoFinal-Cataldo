import ItemCount from "./ItemCount";

const ItemDetail = ({ name, description, price, stock }) => {
return (
    <div>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>${price}</p>
    <ItemCount stock={stock} />
    </div>
);
};

export default ItemDetail;
