/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Carrito.css'

export default function Carrito({ productosInstancia }) {
    console.log(productosInstancia)
    return (
        <div id='Carrito'>
            <Link to="/inicio">Menu</Link>
            <ul>
                {
                    productosInstancia && productosInstancia.map(producto => (
                        <>

                            <li key={producto.id}>{producto.id}</li>

                        </>
                    )
                    )
                }
            </ul>
        </div>
    )
}
