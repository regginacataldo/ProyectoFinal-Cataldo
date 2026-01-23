import { createContext, useState } from "react";

export const CartContext = createContext();

// manejo del carrito global para toda la aplicación


export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);

    if (itemInCart) {
    setCart(
        cart.map(prod =>
        prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
    );
    } else {
    setCart([...cart, { ...item, quantity }]);
    }
};

const removeFromCart = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
};

const clearAll = () => {
    setCart([]);
};

const totalQuantity = () => {
    let total = 0;

    cart.forEach(prod => {
        total += prod.quantity;
    });

    return total;
};


const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
};

return (
    <CartContext.Provider
    value={{
        cart,
        addToCart,
        removeFromCart,
        clearAll,
        totalQuantity,
        totalPrice
    }}
    >
    {children}
    </CartContext.Provider>
);
};
