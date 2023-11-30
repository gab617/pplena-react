/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react"
import './ListElement.css'
import ContextProducts from "../../../Context/ContextProducts"

export default function ListElement({ producto }) {
    const { eliminarDelCarrito } = useContext(ContextProducts)

    const [valorActual, setValorActual] = useState(producto.cantidad)


    function handleclickEliminar() {
        eliminarDelCarrito(producto)
        console.log('eliminar: ', producto.nombre)
    }


    function handleClickIncrementar() {
        const nwValor = valorActual + 1
        producto.cantidad = nwValor
        setValorActual(nwValor)
        console.log(nwValor)
    }

    function handleClickDecrementar() {
        if (valorActual === 1) return
        const nwValor = valorActual - 1
        producto.cantidad = nwValor
        setValorActual(nwValor)
        console.log(nwValor)
    }


    useEffect(() => {/* Cada vez que se renderiza vuelve a asignarle el valor actual en el objeto|| anteriormente sin esto quedaba el valor desfasado :C */
        setValorActual(producto.cantidad)
    });


    return (
        <li key={producto.id} id="ListElement">
            <div id="cont-name-btn-eliminar">
                <p>{producto.nombre}</p>
                <button onClick={handleclickEliminar}>Eliminar</button>
            </div>

            <div id="cont-img-section">
                <div className="img-container">
                    <img src={producto.imagen} alt="" />
                </div>
                <div id="counter">
                    <button id="count-btn1" onClick={handleClickDecrementar}>-</button>
                    <h2>{valorActual}</h2>
                    <button id="count-btn2" onClick={handleClickIncrementar}>+</button>
                </div>
            </div>


        </li>
    )
}
