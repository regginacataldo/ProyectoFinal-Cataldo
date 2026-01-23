import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
  return (
    <CartProvider>   
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra perfumería" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
