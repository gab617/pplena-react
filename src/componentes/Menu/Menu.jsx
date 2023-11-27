import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div id="Menu">
            <Link to={'/products'}>Productos</Link>
            <nav>
                <ul>
                    {/* Elementos del menú */}
                    <li>
                    </li>
                    <li>
                        <Link to="/carrito">Carrito</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
