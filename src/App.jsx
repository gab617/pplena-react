import { useContext, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './App.css'
import productosJSON from './assets/productos.json'
import { UlProductos } from './componentes/UlProductos';
import { Header } from './componentes/Header';
smoothscroll.polyfill();
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Menu from './componentes/Menu/Menu';
import Carrito from './componentes/Carrito/Carrito';
import ContextProducts from './Context/ContextProducts';

/* PRINCIPALMENTE RECIBIA DATOS DE UN SERVIDOR EXTERNO CON LOS DATOS YA DEFINIDOS, PERO POR AHORA PARA DARLE USO Y EVITAR LA ESPERA DEL SERVIDOR EN RENDER, EL CUAL ENTRA EN INACTIVIDAD
DESPUES DE UN TIEMPO ESTA FUNCIONANDO EN EL CLIENTE, CON TODOS LOS DATOS NECESARIOS (ES PEQUEÑA LA APP) */


function App() {

  /* CONTEXTO */
  const {productosNEWJSON,
    crearStringParaEnviar, actuProductosPedidos, restartLocal,
    productosInstancia
  } = useContext(ContextProducts)

  /*   const [productos, setProductos] = useState([]) */
  /* const [productosNEWJSON, setProductosNEWJSON] = useState(productosJSON) */

  /*   const [loading, setLoading] = useState(false) */

  /*   function restartStocks() {
      console.log('restart')
      setLoading(true)
      fetch('https://pplenaexpress.onrender.com/reload-true')
        .then((response) => response.json())
        .then((data) => {
          const newProductos = [...data];
          console.log(newProductos)
          setProductos(newProductos);
          setProductonInstancia([])
          setLoading(false)
        })
    }
   */
  /*   useEffect(() => {
      setLoadingIntial(true)
      fetch('https://pplenaexpress.onrender.com/productos')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setProductos(data);
          setLoadingIntial(false)
        })
  
        .catch((error) => console.error('Error al obtener los datos:', error));
    }, []) */

  /*   if (loading) return <div className='spinner-load-restart'></div> */


  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <UlProductos
                actuProductosPedidos={actuProductosPedidos}
              />
              <Header
                restartLocal={restartLocal}
                crearStringParaEnviar={crearStringParaEnviar}
              />
            </>}

        />

{/*         <Route
          path='/'
          element={
            <Menu/>
          }

        /> */}

        <Route
          path='/carrito'
          element={
            <Carrito
            productosInstancia={productosInstancia}
            />
          }
        />





      </Routes>

    </Router>
  )
}

export default App
