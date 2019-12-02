const initialstate=[]

const postReducer=(state=initialstate,action)=>{
    switch(action.type){
        case('SET_POST'):{
            return [...action.payload]
        }default:{
            return [...state]
        }
    }
}

export default postReducer