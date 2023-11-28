import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu() {
    return (
        <div id="Menu">
            <nav>
                <ul>
                    {/* Elementos del menú */}
                    <li>
                        <Link to={'/products'}>Productos</Link>

                    </li>
                    <li>
                        <Link to="/carrito">Carrito</Link>
                    </li>
{/*                     <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}
