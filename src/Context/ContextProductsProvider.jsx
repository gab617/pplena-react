/* eslint-disable react/prop-types */
// MyContextProvider.js
import {  useState } from 'react';
import ContextProducts from './ContextProducts';
import productosJSON from '../assets/productos.json'

export const MyContextProvider = ({ children }) => {
    // Define el estado o cualquier lógica necesaria aquí
    const [myData, setMyData] = useState('Valor inicial del contexto');
    const [productosNEWJSON, setProductosNEWJSON] = useState(productosJSON)
    const { almacen, verduleria, condimentos, farmacia, otros } = productosNEWJSON
    const [productosInstancia, setProductonInstancia] = useState([])
    const [loadingIntial, setLoadingIntial] = useState(false)

    const [resetIndividualLoading, setResetInduvidualLoading] = useState(false)

    const ordenarAlfabeticamente = (almac, verdul, farm, otro, condiment) => {
        almac.sort((a, b) => a.nombre.localeCompare(b.nombre));
        verdul.sort((a, b) => a.nombre.localeCompare(b.nombre));
        otro.sort((a, b) => a.nombre.localeCompare(b.nombre));
        condiment.sort((a, b) => a.nombre.localeCompare(b.nombre))
        farm.sort((a, b) => a.nombre.localeCompare(b.nombre))
        return [almac, verdul, farm, otro, condiment];
    }

    ordenarAlfabeticamente(almacen, verduleria, farmacia, otros, condimentos)

    function crearStringParaEnviar() {

        // Crea un elemento textarea temporal
        const tempTextArea = document.createElement('textarea');
        const listaString = productosInstancia.map(prod => `*${prod.nombre}`).join('\n');

        tempTextArea.value = `Lista de productos a reponer: \n${listaString}`;

        // Agrega el textarea temporal al cuerpo del documento
        document.body.appendChild(tempTextArea);
        // Selecciona el texto en el textarea
        tempTextArea.select();

        // Intenta copiar el texto al portapapeles
        document.execCommand('copy');

        // Elimina el textarea temporal
        document.body.removeChild(tempTextArea);
    }

    function actuProductosPedidos(productoItem, booleanStock) {
        let newProducts = []
        if (booleanStock) {/* Si es true hay que sacarlo */
            productoItem.stock = true /* se actualiza el producto en cuestion */
            console.log(productosInstancia)
            newProducts = productosInstancia.filter(objeto => objeto.id !== productoItem.id);

            console.log(newProducts, 'BORRAR')

        } else {/* Si es false */
            newProducts = [...productosInstancia, productoItem]
            console.log(newProducts, 'AGREGAR')
        }
        setProductonInstancia(newProducts)
    }


    function reloadProductos() {
        const newProds = productosJSON
        setProductosNEWJSON(newProds)
    }

    function restartLocal() {/* asincronia controlada para resetear la lista */
        if (productosInstancia.length === 0) return
        (async () => {
            setLoadingIntial(true)
            setResetInduvidualLoading(true)

            try {
                await reloadProductos()
                await resetearStocks()
            } catch (error) {
                console.error('Error:', error);
            }
            setLoadingIntial(false)
            setResetInduvidualLoading(false)
        })()

        setProductonInstancia([])
    }

    function resetearStocks(){
        almacen.map(product =>{
            if(!product.stock){
                product.stock = true
            }
        })
        verduleria.map(product =>{
            if(!product.stock){
                product.stock = true
            }
        })
        farmacia.map(product =>{
            if(!product.stock){
                product.stock = true
            }
        })
        condimentos.map(product =>{
            if(!product.stock){
                product.stock = true
            }
        })
        otros.map(product =>{
            if(!product.stock){
                product.stock = true
            }
        })
    }




    if (loadingIntial) return <div className='spinner-load-restart'></div>

    return (
        <ContextProducts.Provider value={{
            myData,
            setMyData,
            productosNEWJSON,
            almacen, verduleria, condimentos, farmacia, otros,
            crearStringParaEnviar, actuProductosPedidos, restartLocal,
            productosInstancia, reloadProductos,
            resetIndividualLoading
        }}>
            {children}
        </ContextProducts.Provider>
    );
};

