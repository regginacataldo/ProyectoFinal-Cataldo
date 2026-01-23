import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const [item, setItem] = useState(null);
const [loading, setLoading] = useState(true);
const { itemId } = useParams();

useEffect(() => {
    getProductById(itemId).then(res => {
    setItem(res);
    setLoading(false);
    });
}, [itemId]);

if (loading) {
    return <p>Cargando perfume...</p>;
}

return <ItemDetail product={item} />;
};

export default ItemDetailContainer;
