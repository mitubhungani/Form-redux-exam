import { ADD_USER, DELETE_USER, GET_USER, UPDATE_USER } from "./UserType";

const initialState ={
    users:[]
}

export const userReducer=(state=initialState,action)=>{
    switch (action.type) {

        case GET_USER:
            return {...state,users:action.payload}

        case ADD_USER:
            return{...state,users:[...state.users,action.payload]}

        case DELETE_USER:
            return {...state,users:state.users.filter((ele)=>ele.id != action.payload)}

        case UPDATE_USER:
            return{...state,users:state.users.map((ele)=>ele.id == action.payload.id ?action.payload :ele)}

        default:
            return state;
    }
}