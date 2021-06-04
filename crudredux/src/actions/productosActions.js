
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTOS_EXITO,
    AGREGAR_PRODUCTOS_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOS,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
    
} from '../types';
//sweetalert2
import Swal from 'sweetalert2';
//carpetas
import clienteAxios from '../confg/axios';


//crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch)=>{
        dispatch(agregarProducto());
        try{
            //insertar en la API
            await clienteAxios.post('/productos',producto);
            //si todo sale bien actualizar el state
            dispatch(agregarProductoExito(producto));
            //alerta de exito
            Swal.fire(
                'correcto','el producto se agrego correctamente','success'
            )
        }catch(error){
            //debug
            console.log(error);
            //si hay un error cambiar el state
            dispatch(agregarProductoError(true));
            //alerta de error
            Swal.fire({
                icon:'error',
                title:'hubo un error',
                text:"hubo un error, intenta de nuevo"
            })
        }
    }
}

const agregarProducto = ()=>({
    type:AGREGAR_PRODUCTO,
    payload:true
})

//si el producto se guarda en la base de datos 
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTOS_EXITO,
    payload:producto
})
//si hubo un error
const agregarProductoError=estado=>({
    type:AGREGAR_PRODUCTOS_ERROR,
    payload:estado
})

//fUNCION QUE DESCARGA LOS PRODUCTOS DE LA BASE DE DATOS

export function obtenerProductosAction(){
    return async (dispatch)=>{
        dispatch(descargarProductos());

        try{
            
            const respuesta =await clienteAxios.get('/productos');
            dispatch(descargaProductosExitosa(respuesta.data))
        } catch (error){
            //debug
            console.log(error)
            dispatch(descargaProductosError())
        }
    }
}
const descargarProductos = ()=> ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload:true
})

const descargaProductosExitosa = productos =>({
    type: DESCARGA_PRODUCTOS_EXITOS,
    payload:productos
})

const descargaProductosError = ()=>({
    type:DESCARGA_PRODUCTOS_ERROR,
    payload:true
})

export function borrarProductoAction(id){
    return async (dispatch)=>{
        dispatch(obtenerProductoEliminar(id))
        
        try{
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito())
            //si se elimina
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        }catch(error){
            dispatch(eliminarProductoError())
        }
    }
}

const obtenerProductoEliminar= id=>({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload:id
})

const eliminarProductoExito = ()=>({
    type:PRODUCTO_ELIMINADO_EXITO,
})
const eliminarProductoError = ()=>({
    type:PRODUCTO_ELIMINADO_ERROR,
    payload:true
})
//colocar producto edicion
export function obtenerProductoEditar(producto){
    return (dispatch)=>{
        dispatch(obtenerProductoAction(producto))
    }
}

const obtenerProductoAction = producto => ({
    type :OBTENER_PRODUCTO_EDITAR,
    payload:producto
})

//editar un registro en la api state
export function editarProductoAction(producto){
    return async (dispatch)=>{
        dispatch(editarProducto(producto));

        try{
           const resultado = await clienteAxios.put(`/productos/${producto.id}`,producto);
           console.log(resultado)

        }catch(error){

        }
    }
}
const editarProducto = producto =>({
    type:COMENZAR_EDICION_PRODUCTO,
    payload:producto
})