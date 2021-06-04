import React from 'react';
import { Link,useHistory } from 'react-router-dom';
//swal
import Swal from 'sweetalert2'
//redux
import { useDispatch } from 'react-redux';
import {borrarProductoAction, obtenerProductoEditar} from '../actions/productosActions';

const Producto = ({producto}) => {
    const {nombre,precio,id}=producto;

    const dispatch = useDispatch();
    const history = useHistory();//habilitar history para redirecion

    //confirmar si desea eliminarlo
    const confirmarEliminarProducto = id=>{
        //preguntar al user
        Swal.fire({
            title: 'seguro??',
            text: "se eliminara un producto de forma inrrebersible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si',
            cancelButtonText:'cancel'
          }).then((result) => {
            if (result.isConfirmed) {

                 //pasarloi al actions
                dispatch(borrarProductoAction(id))
                
              
            }
          })
       
    }
    //funcion que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto));
        history.push(`/productos/editar/${producto.id}`)
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td><button
             type='button'
             onClick={()=>redireccionarEdicion(producto)}
             >Editar</button></td>
            <button
                type='button'
                onClick={()=>confirmarEliminarProducto(id)}

            >Eliminar</button>
        </tr>
     );
}
 
export default Producto;