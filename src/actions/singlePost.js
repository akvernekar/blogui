import axios from 'axios'

export const setSinglePost=(singlePost)=>{
    return{
        type:'SINGLE_POST',
        payload:singlePost
    }
}


export const singlePost=(id)=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response=>{
            dispatch(setSinglePost(response.data))
        })
    }
}

export const resetSinglePost=()=>{
    return {
        type:"RESET_SINGLE_POST"
    }
}