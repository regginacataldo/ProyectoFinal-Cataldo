import perfumeFemenino from "../assets/perfume-femenino.jpg";
import perfumeMasculino from "../assets/perfume-masculino.jpg";
import perfumeGood from "../assets/perfume-good.jpg"
import perfumeSavage from "../assets/perfume-Savage.jpg"
import perfumeValentino from "../assets/perfume-valentino.jpg"
import perfumeVersace from "../assets/perfume-versace.jpg"
import perfumeTini from "../assets/perfume-tini.jpg"
import perfumeMiss from "../assets/perfume-miss.jpg"
import perfumeInvictus from "../assets/perfume-invictus.jpg"
const products = [
  {
    id: "1",
    name: "Perfume Femenino Elegance",
    price: 12000,
    category: "femeninos",
    description: "Perfume floral con notas dulces",
    stock: 10,
    image: perfumeFemenino
  },
  {
    id: "2",
    name: "Perfume Masculino Intense",
    price: 15000,
    category: "masculinos",
    description: "Perfume amaderado de larga duración",
    stock: 8,
    image: perfumeMasculino
  },
  
  {
    id: "3",
    name: "Perfume Femenino Elegante ",
    price: 15000,
    category: "femeninos",
    description: "Perfume amaderado de larga duración",
    stock: 5,
    image: perfumeGood
  },
  {
    id: "4",
    name: "Perfume Masculino Elegante ",
    price: 15000,
    category: "masculinos",
    description: "Perfume amaderado de larga duración",
    stock: 5,
    image: perfumeSavage
  },


  {
    id: "5",
    name: "Perfume Femenino Elegante ",
    price: 15000,
    category: "femeninos",
    description: "Perfume amaderado de larga duración",
    stock: 6,
    image: perfumeValentino
  }

,


  {
    id: "6",
    name: "Perfume Maculino Elegante ",
    price: 15000,
    category: "masculinos",
    description: "Perfume amaderado de larga duración",
    stock: 6,
    image: perfumeVersace
  
  }

  ,


  {
    id: "7",
    name: "Perfume Femenino Elegante ",
    price: 15000,
    category: "femeninos",
    description: "Perfume amaderado de larga duración",
    stock: 6,
    image: perfumeTini
  
  }

  ,


  {
    id: "8",
    name: "Perfume Femenino Elegante ",
    price: 15000,
    category: "femeninos",
    description: "Perfume amaderado de larga duración",
    stock: 6,
    image: perfumeMiss
  
  }

,


  {
    id: "9",
    name: "Perfume Masculino Elegante ",
    price: 15000,
    category: "masculinos",
    description: "Perfume amaderado de larga duración",
    stock: 6,
    image: perfumeInvictus
  
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
