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

export const deleteUSer = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
