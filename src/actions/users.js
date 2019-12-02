import axios from 'axios'

export const setUser=(users)=>{
    return {type:'SET_USER',
           payload:users}
}

export const startSetUser=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            dispatch(setUser(response.data))
        })
    }
}
