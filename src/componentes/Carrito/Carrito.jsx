/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Carrito.css'

export default function Carrito({ productosInstancia }) {
    console.log(productosInstancia)
    return (
        <div id='Carrito'>
            <div id="carrito-links-internos">
                <Link to="/inicio">Menu</Link>
                <Link to="/products">Productos</Link>
            </div>

            <ul>
                {
                    productosInstancia && productosInstancia.map(producto => (
                        <>

                            <li key={producto.id}>
                                <p>{producto.nombre}</p>
                                <div className="img-container">
                                    <img src={producto.imagen} alt="" />
                                </div>
                            </li>

                        </>
                    )
                    )
                }
            </ul>
        </div>
    )
}
