import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/postReducer'
import commentReducer from '../reducers/commentReducer'
import singleUserReducer from '../reducers/singleUserReducer'
import singlePostReducer from '../reducers/singlePostReducer'


const configureStore=()=>{
    const store=createStore(combineReducers({
        users:userReducer,
        posts:postReducer,
        comments:commentReducer,
        singleUser:singleUserReducer,
        singlePost:singlePostReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore