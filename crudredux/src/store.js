//redux
import { createStore, applyMiddleware, compose} from 'redux';
//redux-thunk
import thunk from 'redux-thunk';
//carpetas
import reducer from './reducers'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),

        typeof window === 'object' && 
                typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'?
                                         window.__REDUX_DEVTOOLS_EXTENSION__(): f=> f
    )
);
export default store;