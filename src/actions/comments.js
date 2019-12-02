import axios from 'axios'

export const setComments=(comments)=>{
    return {type:"SET_COMMENTS",
payload:comments}
}




export const startSetComments=(id)=>{
    return (dispatch)=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response=>{
        dispatch(setComments(response.data))
    })
    }
}