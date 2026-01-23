import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const { categoryId } = useParams();


useEffect(() => {
    getProducts().then(res => {
      if (categoryId) {
        setProducts(res.filter(prod => prod.category === categoryId));
      } else {
        setProducts(res);
      }
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <>
      <div className="page-title">
        <h2>{greeting}</h2>
      </div>

      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
