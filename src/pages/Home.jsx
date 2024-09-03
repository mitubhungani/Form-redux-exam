import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUSer, getUser, updateUser } from "../redux/UserAction";
import { Button, Form, Modal } from "react-bootstrap";

const Home = () => {
  let dispatch = useDispatch();

  let [name,setName]=useState('')
  let [number,setNumber]=useState('')
  const [show, setShow] = useState(false);
  let [id,setId]=useState(0);

  const handleClose=()=>{
    setShow(false)
    let userdata={
    name:name,
    number:number,
    id:id
  }
  dispatch(updateUser(userdata))
  }

  const handleShow = (ele) => {
    setId(ele.id);
    setShow(true);
    setName(ele.name);
    setNumber(ele.number);
  }



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
      <div>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                  />
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter content"
                    autoFocus
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div>
        {data.users.map((ele) => (
          <div>
            <h1>{ele.name}</h1>
            <p>{ele.number}</p>
            <button onClick={() => handleDelete(ele.id)}>DELETE</button>
            <button onClick={()=>handleShow(ele)}>UPDATE</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
