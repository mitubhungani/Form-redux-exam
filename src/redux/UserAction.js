import axios from "axios";
import { ADD_USER, DELETE_USER, GET_USER, UPDATE_USER } from "./UserType";

export const getUser =()=>async (dispatch)=> {

    try {
        let res = await axios.get("http://localhost:3000/users")
        dispatch({type:GET_USER,payload:res.data})
        console.log(res.data);
    } catch (error) {
        console.log(error);
        
    }
}

export const addUser = (user) =>async (dispatch)=> {

    try {
        let res = await axios.post("http://localhost:3000/users",user);
        dispatch({ type: ADD_USER, payload: res.data });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
};

export const deleteUSer = (id) => async (dispatch)=>  {

    try {
        let res = await axios.delete(`http://localhost:3000/users/${id}`)
        dispatch({ type: DELETE_USER, payload: id });
        console.log(res.data);
        
    } catch (error) {
        
    }

//   return {
//     type: DELETE_USER,
//     payload: id,
//   };
};

export const updateUser = (user) => async (dispatch) =>  {
    try {
        let res =await axios.patch(`http://localhost:3000/users/${user.id}`,user)
        console.log(res.data);
        
        dispatch({
            type:UPDATE_USER,
            payload: user,
        })
    } catch (error) {
        console.log(error);
        
    }
//   return {
//     type: UPDATE_USER,
//     payload: user,
//   };
};
