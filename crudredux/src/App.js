//react
import React from 'react';
//redux
import { Provider } from 'react-redux';
//router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//carpetas
import Header from './componenets/Header'
import Productos from './componenets/Productos'
import NuevoProducto from './componenets/NuevoProducto'
import EditarProducto from './componenets/EditarProducto'
import store from './store';
//css
import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header/>
      <div>
        <Switch>
          <Route exact path='/' component={Productos}/>
          <Route exact path='/productos/nuevo' component={NuevoProducto}/>
          <Route exact path='/productos/editar/:id' component={EditarProducto}/>
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
