import axios from 'axios'


export const setSingleUser=(singleUser)=>{
    return {type:'SINGLE_USER',
payload:singleUser}
}

export const singleUser=(id)=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            dispatch(setSingleUser(response.data))
        })
    }
}

export const resetSingleUser=()=>{
    return {type:'RESET_SINGLE_USER'}
}