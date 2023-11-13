/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

function ProductoLi({ producto, actuProductosPedidos }) {
  const [stock, setStock] = useState(producto.stock)



  function agregarOeliminar(producto) {
    console.log('solicitar', stock)
    const newStock = !stock
    setStock(newStock)
    actuProductosPedidos(producto, newStock)

/*     fetch(`http://localhost:3000/updateProduct/${producto.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stock: newStock }), // Enviar los datos editados
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor, que contendrá los datos actualizados
        console.log(data, "ACTUALIZADA")

      })
      .then(() => actuProductosPedidos(producto, newStock)) 
      .catch((error) => {
        // Manejar errores
        console.log(error, "rror")
      }); */ /* Cada vez que se actualiza, se hace una llamada al servidor y actualiza el json que actua como base de datos, hay un error que al hacer solicitudes rapido se rompe todo. */
  }


  return (
    <>
      <div className={`producto ${stock ? "con-stock" : "agotado"}`} onClick={() => agregarOeliminar(producto)}>
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div>
        <h3>{producto.nombre}</h3>
      </div>
    </>
  )
}

export default ProductoLi