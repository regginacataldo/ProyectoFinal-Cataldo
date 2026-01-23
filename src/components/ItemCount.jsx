import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
const [count, setCount] = useState(initial);

const increment = () => {
    if (count < 5) setCount(count + 1);
};

<p>Cantidad:</p>

const decrement = () => {
    if (count > 1) setCount(count - 1);
};

return (
    <div className="item-count">
    <div className="item-count-controls">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>

    <button
        className="item-count-add"
        onClick={() => onAdd(count)}
    >
        Agregar al carrito
    </button>
    </div>
);
};

export default ItemCount;
