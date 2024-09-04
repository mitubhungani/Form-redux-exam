// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../redux/UserAction";

// const AddUserr = () => {
//   let [name, setName] = useState("");
//   let [number, setNumber] = useState("");
  
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let newuser = {
//       name,
//       number,
//     };
//     dispatch(addUser(newuser));
//     console.log(newuser);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddUserr;









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
    setName("");
    setNumber("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Number</label>
          <input
            type="number"
            placeholder="Enter your number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserr;
