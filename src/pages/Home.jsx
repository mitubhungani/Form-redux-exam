import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/UserAction";

const Home = () => {
  let dispatch =useDispatch()
  
  let data = useSelector((store) => store.user);
  console.log("data", data);

  useEffect(()=>{
    dispatch(getUser())
  },[])

  return (
    <div>
      {data.users.map((ele)=>(
        <div>
          <h1>{ele.name}</h1>
          <p>{ele.number}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
