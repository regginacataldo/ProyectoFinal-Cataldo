import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const [item, setItem] = useState(null);
const { itemId } = useParams();

useEffect(() => {
    getProductById(itemId).then(setItem);
}, [itemId]);

return item && <ItemDetail {...item} />;
};

export default ItemDetailContainer;
