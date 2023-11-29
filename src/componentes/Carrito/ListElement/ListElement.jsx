/* eslint-disable react/prop-types */

import { useState } from "react"
import './ListElement.css'

export default function ListElement({ producto }) {

    const [valorActual, setValorActual] = useState(producto.cantidad)




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


    return (
        <li key={producto.id} id="ListElement">
            <p>{producto.nombre}</p>
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
