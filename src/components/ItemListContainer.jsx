import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productos);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <h2>Cargando productos...</h2>;
  if (error) return <h2>Hubo un error al cargar los productos</h2>;

  return <ItemList products={products} />;
};

export default ItemListContainer;
