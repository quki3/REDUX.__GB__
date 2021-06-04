import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'
const Header = () => {
    return ( 
        <nav id='nav'>
            <div>
                <h1>
                    <Link to={'/'} >
                        header
                    </Link>
                </h1>
            </div>
            <Link to={"/productos/nuevo"}> Agregar producto</Link>
        </nav>
     );
}
 
export default Header;