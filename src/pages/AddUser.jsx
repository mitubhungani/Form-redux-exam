import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/UserAction";

const AddUserr = () => {
  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newuser = {
      name,
      number,
    };
    dispatch(addUser(newuser));
    console.log(newuser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserr;
