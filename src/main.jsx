//Importa StrictMode

//Es una herramienta de React

//Ayuda a detectar errores en desarrollo

//No se ve en producción

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Permite crear el punto de renderizado

//Es la forma moderna de iniciar React (React 18)

import './index.css'
//Importa los estilos globales Aplica CSS a toda la app
import App from './App.jsx'
//Importa el componente principal App es el corazón de la aplicación
createRoot(document.getElementById('root')).render(
  //Le decís a React: “Renderizá la app dentro del div root del HTML”
  <StrictMode>
    <App />
  </StrictMode>,
)
//React renderiza:
//App dentro de StrictMode

//App es el primer componente que se muestra

//👉 Si App no existe, no hay aplicación