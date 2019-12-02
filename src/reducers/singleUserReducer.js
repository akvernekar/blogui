const intialstate={}

const singleUserReducer=(state=intialstate,action)=>{
    switch (action.type){
        case 'SINGLE_USER':{
            return {...action.payload}
        }
        case 'RESET_SINGLE_USER':{
            return {}
        }
        default:{
            return {...state}
        }
    }
}

export default singleUserReducer