const products = [
{
    id: "1",
    name: "Producto A",
    price: 1000,
    category: "ropa",
    description: "Descripción del producto A",
    stock: 10
},
{
    id: "2",
    name: "Producto B",
    price: 2000,
    category: "calzado",
    description: "Descripción del producto B",
    stock: 5
}
];

export const getProducts = () => {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    }, 500);
});
};

export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products.find(p => p.id === id));
    }, 500);
});
};
