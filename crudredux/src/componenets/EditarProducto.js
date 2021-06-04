import React,{useState,useEffect} from 'react';
//react-redux
import { useDispatch, useSelector } from 'react-redux'
//carpetas
import {editarProductoAction} from '../actions/productosActions'

const EditarProducto = () => {
    //nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre:'',
        precio
    })
    //editar producto
    const productoeditar = useSelector(state => state.productos.productoeditar );
    

    //llenar el state automaticamente
    useEffect(()=>{
        guardarProducto(productoeditar)
    },[productoeditar])
    const { nombre, precio, id }=producto;

    const submitEditarProducto = e =>{
        e.preventDefault();
        editarProductoAction();
    }
    return ( 
        <div id='nuevoproducto'>
            <div>
                <div>
                    <div>
                        <h2>editar producto</h2>
                        <form 
                            onSubmit={submitEditarProducto}
                        
                        >
                            <div>
                                <label>Nombre Producto</label>
                                <input
                                    type='Text'
                                    placeholder='nombre producto'
                                    name='nombre'
                                    value={nombre}
                                />
                            </div>
                            <div>
                                <label>precio Producto</label>
                                <input
                                    type='number'
                                    placeholder='precio producto'
                                    name='precio'
                                    value={precio}
                                />
                            </div>
                            <button
                            type='submit'
                            >guardar cambios</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;