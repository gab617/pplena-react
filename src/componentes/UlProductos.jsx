/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import ProductoLi from './ProductoLi'
import { useContext } from 'react'
import ContextProducts from '../Context/ContextProducts'
import './UlProductos.css'

export function UlProductos() {
    const { productosInstancia,
        almacen, verduleria, otros, farmacia, condimentos, actuProductosPedidos,
    } = useContext(ContextProducts)


    console.log(productosInstancia)

    /* Funciones seguramente poco eficientes pero funcionales a lo que buscaba, recorre todos los objetos con el fin de encotnrar las coincidencias en la lista de 
    elementos ya clieckados y poder renderizar los elementos ya solicitados al navegar entre las paginas (mejorar optimizacion en algun momento) */

    function editarElementoPorId(array) {
        let objetoEncontrado

        productosInstancia.forEach((prodInst) => {
            objetoEncontrado = array.find(item => prodInst.id === item.id);
            // Verificar si se encontró el objeto
            if (objetoEncontrado) {
                // Realizar cualquier actualización necesaria en el objeto
                objetoEncontrado.stock = false;
                return true
            } else {
                return false
            }
        })
    }

    const encontrarYActualizar = (prodsInstancia) => {
        console.log(prodsInstancia, "A buscar")
        const encontradoEnArray1 = editarElementoPorId(almacen);
        if (encontradoEnArray1) return almacen;

        const encontradoEnArray2 = editarElementoPorId(verduleria);
        if (encontradoEnArray2) return verduleria;

        const encontradoEnArray3 = editarElementoPorId(otros);
        if (encontradoEnArray3) return otros;

        const encontradoEnArray4 = editarElementoPorId(farmacia);
        if (encontradoEnArray4) return farmacia;

        const encontradoEnArray5 = editarElementoPorId(condimentos);
        if (encontradoEnArray5) return condimentos;
    };

    if (productosInstancia.length !== 0) {
        encontrarYActualizar(productosInstancia)
    }




    return (
        <>
            <div id='menu-links-internos'>
                <Link to="/inicio">Menu</Link>
                <Link to="/carrito">Carrito</Link>
            </div>


            <ul id='Almacen-ul' className='productos-container'>
                {
                    almacen.map(producto => {
                        return (
                            <li key={producto.id}>
                                <ProductoLi
                                    producto={producto}
                                    actuProductosPedidos={actuProductosPedidos}
                                ></ProductoLi>
                            </li>
                        )
                    })
                }
            </ul>

            <ul id='Verduleria-ul' className='productos-container'>
                {
                    verduleria.map(producto => {
                        return (
                            <li key={producto.id}>
                                <ProductoLi
                                    producto={producto}
                                    actuProductosPedidos={actuProductosPedidos}
                                ></ProductoLi>
                            </li>
                        )
                    })
                }
            </ul>

            <ul id='Condimentos-ul' className='productos-container'>
                {
                    condimentos.map(producto => {
                        return (
                            <li key={producto.id}>
                                <ProductoLi
                                    producto={producto}
                                    actuProductosPedidos={actuProductosPedidos}
                                ></ProductoLi>
                            </li>
                        )
                    })
                }
            </ul>

            <ul id='Farmacia-ul' className='productos-container'>
                {
                    farmacia.map(producto => {
                        return (
                            <li key={producto.id}>
                                <ProductoLi
                                    producto={producto}
                                    actuProductosPedidos={actuProductosPedidos}
                                ></ProductoLi>
                            </li>
                        )
                    })
                }
            </ul>

            <ul id='Otros-ul' className='productos-container'>
                {
                    otros.map(producto => {
                        return (
                            <li key={producto.id}>
                                <ProductoLi
                                    producto={producto}
                                    actuProductosPedidos={actuProductosPedidos}
                                ></ProductoLi>
                            </li>
                        )
                    })
                }
            </ul>




        </>
    )
}
