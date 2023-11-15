import { useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './App.css'
import productosJSON from './assets/productos.json'
import { UlProductos } from './componentes/UlProductos';
import { Header } from './componentes/Header';
smoothscroll.polyfill();

/* PRINCIPALMENTE RECIBIA DATOS DE UN SERVIDOR EXTERNO CON LOS DATOS YA DEFINIDOS, PERO POR AHORA PARA DARLE USO Y EVITAR LA ESPERA DEL SERVIDOR EN RENDER, EL CUAL ENTRA EN INACTIVIDAD
DESPUES DE UN TIEMPO ESTA FUNCIONANDO EN EL CLIENTE, CON TODOS LOS DATOS NECESARIOS (ES PEQUEÑA LA APP) */


function App() {

  /*   const [productos, setProductos] = useState([]) */
  const [productosNEWJSON, setProductosNEWJSON] = useState(productosJSON)
  const [productosInstancia, setProductonInstancia] = useState([])
  const [loadingIntial, setLoadingIntial] = useState(false)
  /*   const [loading, setLoading] = useState(false) */


  function crearStringParaEnviar() {

    // Crea un elemento textarea temporal
    const tempTextArea = document.createElement('textarea');
    const listaString = productosInstancia.map(prod => `*${prod.nombre}`).join('\n');

    tempTextArea.value = `Lista de productos a reponer: \n${listaString}`;

    // Agrega el textarea temporal al cuerpo del documento
    document.body.appendChild(tempTextArea);
    // Selecciona el texto en el textarea
    tempTextArea.select();

    // Intenta copiar el texto al portapapeles
    document.execCommand('copy');

    // Elimina el textarea temporal
    document.body.removeChild(tempTextArea);
  }

  function actuProductosPedidos(productoItem, booleanStock) {
    let newProducts = []
    if (booleanStock) {/* Si es true hay que sacarlo */
      console.log(productosInstancia)
      newProducts = productosInstancia.filter(objeto => objeto.id !== productoItem.id);

      console.log(newProducts, 'BORRAR')

    } else {/* Si es false */
      newProducts = [...productosInstancia, productoItem]
      console.log(newProducts, 'AGREGAR')
    }
    setProductonInstancia(newProducts)
  }


  function reloadProductos() {
    const newProds = productosJSON
    setProductosNEWJSON(newProds)
  }

  function restartLocal() {/* asincronia controlada para resetear la lista */
    if (productosInstancia.length == 0) return
    (async () => {
      setLoadingIntial(true)

      try {
        await reloadProductos();
      } catch (error) {
        console.error('Error:', error);
      }
      setLoadingIntial(false)

    })()
    const newProds = productosJSON
    console.log(newProds)
    setProductosNEWJSON(newProds)
    setProductonInstancia([])
  }

  const { almacen, verduleria, condimentos, farmacia, otros } = productosNEWJSON


  const ordenarAlfabeticamente = (almac, verdul, farm, otro, condiment) => {
    almac.sort((a, b) => a.nombre.localeCompare(b.nombre));
    verdul.sort((a, b) => a.nombre.localeCompare(b.nombre));
    otro.sort((a, b) => a.nombre.localeCompare(b.nombre));
    condiment.sort((a, b) => a.nombre.localeCompare(b.nombre))
    farm.sort((a, b) => a.nombre.localeCompare(b.nombre))
    return [almac, verdul, farm, otro, condiment];
  }

  ordenarAlfabeticamente(almacen, verduleria, farmacia, otros, condimentos)



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
  if (loadingIntial) return <div className='spinner-load-restart'></div>

  return (
    <>


      <UlProductos
        almacen={almacen}
        verduleria={verduleria}
        farmacia={farmacia}
        otros={otros}
        condimentos={condimentos}
        actuProductosPedidos={actuProductosPedidos}
      />
      <Header
        restartLocal={restartLocal}
        crearStringParaEnviar={crearStringParaEnviar}
      />

    </>
  )
}

export default App
