//react
import React,{ useEffect } from 'react';
//css
import './productos.css'
//react-redux
import { useSelector, useDispatch } from 'react-redux';
//carpetas
import { obtenerProductosAction } from '../actions/productosActions';
import Producto from './Producto';


const Productos = () => {
    //dispatch una actions
    const dispatch = useDispatch();
    //cuando un componente cargue le llamamos 
    useEffect(()=>{

        //consultar la api
        const cargarProductos =()=> dispatch(obtenerProductosAction());
        cargarProductos();

    },[])
    
    //obtener el state
    const productos=useSelector(state =>state.productos.productos);
    const error = useSelector(state => state.productos.error)
    const cargando = useSelector(state => state.productos.loading);
    

    return ( 
        <>
        <h1>Listado de productos</h1>
        {error?<p>hubo un error</p>:null}
        {cargando?<p>cargando...</p>:null}
        <table id='productos'>
            <thead>
                <tr >
                    <th>nombre</th>
                    <th>precio</th>
                    <th>acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.length === 0? 'No hay productos':(
                    productos.map(producto=>(
                        <Producto
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )}
            </tbody>
        </table>
        </>
     );
}
 
export default Productos;