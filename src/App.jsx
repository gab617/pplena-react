import { useEffect, useState } from 'react';
import './App.css'
import ProductoLi from './componentes/ProductoLi';

function App() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  function restartStocks() {
    console.log('restart')
    setLoading(true)
    fetch('http://localhost:3000/reload-true')
      .then((response) => response.json())
      .then((data) => {
        const newProductos = [...data];
        console.log(newProductos)
        setProductos(newProductos);
        setLoading(false)
      })
  }

  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, [])

  if (loading) return <div className='spinner-load-restart'></div>

  return (
    <>
      <div className='header-buttons'>
        <button className='interactive-button' onClick={restartStocks}>REINICIAR</button>
      </div>
      <ul className='productos-container'>
        {
          productos.map(producto => {
            return (
              <li key={producto.id}>
                <ProductoLi
                  producto={producto}
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
