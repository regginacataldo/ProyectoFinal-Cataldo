import { useState } from "react";

const ItemCount = ({ stock }) => {
const [count, setCount] = useState(1);

return (
    <div>
    <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
    <span>{count}</span>
    <button onClick={() => count < stock && setCount(count + 1)}>+</button>
    </div>
);
};

export default ItemCount;
