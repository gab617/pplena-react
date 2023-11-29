/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Carrito.css'
import ListElement from "./ListElement/ListElement";

export default function Carrito({ productosInstancia }) {
    console.log(productosInstancia)


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
        </div>
    )
}
