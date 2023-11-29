/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Carrito.css'
import ListElement from "./ListElement/ListElement";
import { useContext } from "react";
import ContextProducts from "../../Context/ContextProducts";

export default function Carrito({ productosInstancia }) {
    console.log(productosInstancia)
    const { crearStringParaEnviar2 } = useContext(ContextProducts)


    return (
        <div id='Carrito'>
            <div id="carrito-links-internos">
                {/* <Link to="/">Menu</Link> */}
                <Link to="/">
                    <div id="btn-volver">
                        <h2>Productos</h2>
                        <p>volver</p>
                    </div>
                </Link>
            </div>

            <ul>
                {
                    productosInstancia && productosInstancia.map(producto => (
                        <>

                            <ListElement
                                producto={producto}
                            />
                        </>
                    )
                    )
                }
            </ul>
            <div id="cont-btn-carrito">
                <button className='interactive-button' onClick={crearStringParaEnviar2}>Crear mensaje</button>
            </div>

        </div>
    )
}
