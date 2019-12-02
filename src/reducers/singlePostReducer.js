const initialState=[]

const singlePostReducer=(state=initialState,action )=>{
    switch(action.type){
        case 'SINGLE_POST':{
            return [...action.payload]
        }
        case 'RESET_SINGLE_POST':{
            return []
        }
        default:{
            return [...state]
        }
    }
}

export default singlePostReducer