import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setProduct({ id: resp.id, ...resp.data() });
        } else {
          setProduct(false);
        }
      })
      .catch(() => setProduct(false));
  }, [itemId]);

  if (product === false) {
    return <h2>Producto no encontrado</h2>;
  }

  if (!product) {
    return <h2>Cargando detalle...</h2>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
