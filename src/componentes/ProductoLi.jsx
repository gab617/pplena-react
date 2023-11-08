/* eslint-disable react/prop-types */

import { useState } from "react"

function ProductoLi({ producto }) {
    const [stock,setStock] = useState(producto.stock)

    function definirFaltaDeStock(producto) {
        console.log('solicitar', producto.stock)
        const newStock = !stock
        setStock(newStock)
        
        fetch(`http://localhost:3000/updateProduct/${producto.id}`, {
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
            .catch((error) => {
              // Manejar errores
              console.log(error, "rror")
            });
    }


    return (
        <>
            <div className={`producto ${stock ? "con-stock" : "agotado"}`} onClick={() => definirFaltaDeStock(producto)}>
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div>
                <h3>{producto.nombre}</h3>
                <p>Stock: {stock ? "Disponible" : "Agotado"}</p>
            </div>
        </>
    )
}

export default ProductoLi