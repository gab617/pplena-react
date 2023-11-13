import { useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './App.css'
import ProductoLi from './componentes/ProductoLi';
import productosJSON from './assets/productos.json'
smoothscroll.polyfill();

/* PRINCIPALMENTE RECIBIA DATOS DE UN SERVIDOR EXTERNO CON LOS DATOS YA DEFINIDOS, PERO POR AHORA PARA DARLE USO Y EVITAR LA ESPERA DEL SERVIDOR EN RENDER, EL CUAL ENTRA EN INACTIVIDAD
DESPUES DE UN TIEMPO ESTA FUNCIONANDO EN EL CLIENTE, CON TODOS LOS DATOS NECESARIOS (ES PEQUEÑA LA APP) */


function App() {

  /*   const [productos, setProductos] = useState([]) */
  const [productosNEWJSON, setProductosNEWJSON] = useState(productosJSON)
  const [productosInstancia, setProductonInstancia] = useState([])
  const [loadingIntial, setLoadingIntial] = useState(false)
  const [loading, setLoading] = useState(false)



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
    console.log(productoItem, booleanStock, "aaa")
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

  useEffect(() => {
    console.log(productosInstancia)
  }, [productosInstancia])

  function reloadProductos() {
    const newProds = productosJSON
    setProductosNEWJSON(newProds)
  }

  function restartLocal() {
    (async () => {
      setLoadingIntial(true)

      try {
        // Código asíncrono que espera la resolución de una promesa
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

  const { almacen, verduleria, otros } = productosNEWJSON


  const ordenarAlfabeticamente = (almac,verdul,otro) => {
    almac.sort((a, b) => a.nombre.localeCompare(b.nombre));
    verdul.sort((a, b) => a.nombre.localeCompare(b.nombre));
    otro.sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.log(almac,verdul, otro)
    return [almac,verdul,otro];
  }

  ordenarAlfabeticamente(almacen,verduleria,otros)



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

  if (loading) return <div className='spinner-load-restart'></div>
  if (loadingIntial) return <div className='spinner-load-restart'></div>

  return (
    <>
      <div className='header-buttons'>
        <div id='buttons'>
          <button className='interactive-button' onClick={restartLocal}>REINICIAR</button>
          <button className='interactive-button' onClick={crearStringParaEnviar}>Crear mensaje</button>
        </div>
        <div id='links-categorias'>
          <a id='a-almacen' href="#Almacen-ul">Almacen</a>
          <a id='a-verduleria' href="#Verduleria-ul">Verduleria</a>
          <a id='a-otros' href="#Otros-ul">Otros</a>
        </div>
      </div>

      <ul id='Almacen-ul' className='productos-container'>
        {
          almacen.map(producto => {
            return (
              <li key={producto.id}>
                <ProductoLi
                  producto={producto}
                  actuProductosPedidos={actuProductosPedidos}
                ></ProductoLi>
              </li>
            )
          })
        }
      </ul>

      <ul id='Verduleria-ul' className='productos-container'>
        {
          verduleria.map(producto => {
            return (
              <li key={producto.id}>
                <ProductoLi
                  producto={producto}
                  actuProductosPedidos={actuProductosPedidos}
                ></ProductoLi>
              </li>
            )
          })
        }
      </ul>

      <ul id='Otros-ul' className='productos-container'>
        {
          otros.map(producto => {
            return (
              <li key={producto.id}>
                <ProductoLi
                  producto={producto}
                  actuProductosPedidos={actuProductosPedidos}
                  productosInstancia={productosInstancia}
                ></ProductoLi>
              </li>
            )
          })
        }
      </ul>

    </>
  )
}

export default App
