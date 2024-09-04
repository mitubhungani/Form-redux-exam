// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <h1></h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/adduser">AddUser</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between ">
      <div className="w-2/4">
        <h1 className="text-2xl w-28 font-bold">My App</h1>
      </div>
      <div className=" w-2/4">
        <nav className="mt-4 m-auto w-2/4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/adduser"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Add User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
