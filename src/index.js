import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startSetUser} from './actions/users'
import {startSetPost} from './actions/posts'

const store=configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(startSetUser())
store.dispatch(startSetPost())


const ele=(
<Provider store={store}>
    <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));


