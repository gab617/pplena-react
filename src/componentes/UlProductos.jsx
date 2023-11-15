/* eslint-disable react/prop-types */
import ProductoLi from './ProductoLi'

export function UlProductos({ almacen, verduleria, otros, farmacia ,condimentos, actuProductosPedidos }) {
    console.log(farmacia)
    return (
        <>
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
