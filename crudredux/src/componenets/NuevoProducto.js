//react
import React,{useState} from 'react';
//react-redux
import { useDispatch, useSelector } from 'react-redux'
//css
import './nuevoproducto.css'
//carpetas/action de redux
import { crearNuevoProductoAction } from '../actions/productosActions'

const NuevoProducto = ({history}) => {

    //state del componente
    const [nombre,guardarNombre]=useState('')
    const [precio,guardarPrecio]=useState()

    //utilizar use dispatch y te crea un funcion
    const dispatch = useDispatch();

    //acceder al state del store
    const cargando= useSelector(state=>state.productos.loading);
    const error = useSelector(state => state.productos.error)

    //mandar a llamar al action de productoaction
    const agregarProducto = producto=> dispatch(crearNuevoProductoAction(producto))

    //cuando el usuario haga submit
    const submitNuevoProducto = e =>{
        e.preventDefault();

        //validar formulario
        if(nombre.trim() ===''|| precio<=0){
            return;
        }
        //si no hay errores

        //crear el nuevo  producto
        agregarProducto({
            nombre,
            precio
        });
        //redireccionar
        history.push('/');
    }



    return ( 
        <div id='nuevoproducto'>
            <div>
                <div>
                    <div>
                        <h2>Agregar Nuevo Producto</h2>
                        <form onSubmit={submitNuevoProducto}>
                            <div>
                                <label>Nombre Producto</label>
                                <input
                                    type='Text'
                                    placeholder='nombre producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>precio Producto</label>
                                <input
                                    type='number'
                                    placeholder='precio producto'
                                    name='precio'
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                            type='submit'
                            >Agregar</button>
                            
                        </form>
                        {cargando?<p>cargando...</p>:null}
                        {error?<p>hubo un error</p>:null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;