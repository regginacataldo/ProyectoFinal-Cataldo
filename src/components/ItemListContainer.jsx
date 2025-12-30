import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
const [items, setItems] = useState([]);
const { categoryId } = useParams();

useEffect(() => {
    getProducts().then(products => {
    if (categoryId) {
        setItems(products.filter(p => p.category === categoryId));
    } else {
        setItems(products);
    }
    });
}, [categoryId]);

return <ItemList items={items} />;
};

export default ItemListContainer;
