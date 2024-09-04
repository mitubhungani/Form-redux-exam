// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUSer, getUser, updateUser } from "../redux/UserAction";
// import { Button, Form, Modal } from "react-bootstrap";

// const Home = () => {
//   let dispatch = useDispatch();

//   let [name,setName]=useState('')
//   let [number,setNumber]=useState('')
//   const [show, setShow] = useState(false);
//   let [id,setId]=useState(0);

//   const handleClose=()=>{
//     setShow(false)
//     let userdata={
//     name:name,
//     number:number,
//     id:id
//   }
//   dispatch(updateUser(userdata))
//   }

//   const handleShow = (ele) => {
//     setId(ele.id);
//     setShow(true);
//     setName(ele.name);
//     setNumber(ele.number);
//   }



//   let data = useSelector((store) => store.user);
//   console.log("data", data);

//   let handleDelete = (id) => {
//     dispatch(deleteUSer(id));
//   };

//   useEffect(() => {
//     dispatch(getUser());
//   }, []);

//   return (
//     <>
//       <div>
//         <div>
//           <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>Update Blog</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="exampleForm.ControlInput1"
//                 >
//                   <Form.Label>Title</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter title"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     autoFocus
//                   />
//                   <Form.Label>Number</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter content"
//                     autoFocus
//                     value={number}
//                     onChange={(e) => setNumber(e.target.value)}
//                   />
//                 </Form.Group>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//               <Button variant="primary" onClick={handleClose}>
//                 Save Changes
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </div>
//       <div>
//         {data.users.map((ele) => (
//           <div>
//             <h1>{ele.name}</h1>
//             <p>{ele.number}</p>
//             <button onClick={() => handleDelete(ele.id)}>DELETE</button>
//             <button onClick={()=>handleShow(ele)}>UPDATE</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Home;












import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUSer, getUser, updateUser } from "../redux/UserAction";

const Home = () => {
  let dispatch = useDispatch();

  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  const [show, setShow] = useState(false);
  let [id, setId] = useState(0);

  const handleClose = () => {
    setShow(false);
    let userdata = {
      name: name,
      number: number,
      id: id,
    };
    dispatch(updateUser(userdata));
  };

  const handleShow = (ele) => {
    setId(ele.id);
    setShow(true);
    setName(ele.name);
    setNumber(ele.number);
  };

  let data = useSelector((store) => store.user);
  console.log("data", data);

  let handleDelete = (id) => {
    dispatch(deleteUSer(id));
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        {data.users.map((ele) => (
          <div key={ele.id} className="bg-white shadow-md rounded p-4 mb-4">
            <h1 className="text-xl font-bold mb-2">{ele.name}</h1>
            <p className="text-gray-700">{ele.number}</p>
            <button
              onClick={() => handleDelete(ele.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              DELETE
            </button>
            <button
              onClick={() => handleShow(ele)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              UPDATE
            </button>
          </div>
        ))}
      </div>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Update Blog</h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Number
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter content"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Close
              </button>
              <button
                onClick={handleClose}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
