// // import React, { useState } from "react";
// // import "./Login.css";
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   loginAdminId,
// //   loginAdminName,
// //   loginUser,
// //   loginUserName,
// // } from "../../Redux/action.js";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // export const Login = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUser({
// //       ...user,
// //       [name]: value,
// //     });
// //   };

// //   const login = () => {
// //     axios
// //       .post("http://localhost:4000/login", user)
// //       .then((res) => {
// //         if (res.data.user.email === "kulalraghavendra21@gmail.com") {
// //           dispatch(loginAdminId(res.data.user._id));
// //           dispatch(loginAdminName(res.data.user.name));
// //           toast(`Welcome Admin ${res.data.user.name}`, { type: "success" });
// //           setTimeout(() => navigate("/profile"), 4000);
// //         } else {
// //           dispatch(loginUser(res.data.user._id));
// //           dispatch(loginUserName(res.data.user.name));
// //           toast("Successfully Login", { type: "success" });
// //           setTimeout(() => navigate("/profile"), 3000);
// //         }
// //       })
// //       .catch(() => {
// //         toast("Invalid Credentials", { type: "error" });
// //       });
// //   };

// //   return (
// //     <div className="flex flex-col md:flex-row w-full justify-around items-center m-auto mt-16 mb-16 px-4">
// //       <div className="login mb-10 md:mb-28 w-full md:w-1/2 max-w-md">
// //         <h1 className="text-2xl font-semibold mb-4">Login</h1>
// //         <input
// //           type="text"
// //           name="email"
// //           value={user.email}
// //           onChange={handleChange}
// //           placeholder="Enter your Email"
// //           className="w-full p-2 mb-4 border rounded"
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           value={user.password}
// //           onChange={handleChange}
// //           placeholder="Enter your Password"
// //           className="w-full p-2 mb-4 border rounded"
// //         />
// //         <button
// //           onClick={login}
// //           className="w-full p-2 bg-blue-500 text-white rounded-md text-xl mb-4"
// //         >
// //           Login
// //         </button>
// //         <ToastContainer />
// //         <div className="text-center mb-4">OR</div>
// //         <Link to="/register">
// //           <button className="w-full p-2 bg-green-500 text-white rounded-md text-xl">
// //             Register
// //           </button>
// //         </Link>
// //       </div>
// //       <div className="w-full md:w-1/2 flex justify-center">
// //         <img className="h-64 md:h-96 w-64 md:w-96" src="./login.gif" alt="login gif" />
// //       </div>
// //     </div>
// //   );
// // };

// import React, { useState } from "react";
// import "./Login.css";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {
//   loginAdminId,
//   loginAdminName,
//   loginUser,
//   loginUserName,
// } from "../../Redux/action.js";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const login = () => {
//     axios
//       .post("http://localhost:4000/login", user)
//       .then((res) => {
//         const userData = res.data.user;
//         dispatch(loginUser(userData._id));
//         dispatch(loginUserName(userData.name));
//         if (userData.email === "kulalraghavendra21@gmail.com") {
//           dispatch(loginAdminId(userData._id));
//           dispatch(loginAdminName(userData.name));
//           toast(`Welcome Admin ${userData.name}`, { type: "success" });
//           setTimeout(() => navigate("/profile"), 4000);
//         } else {
//           toast("Successfully Login", { type: "success" });
//           setTimeout(() => navigate("/profile"), 3000);
//         }
//       })
//       .catch(() => {
//         toast("Invalid Credentials", { type: "error" });
//       });
//   };

//   return (
//     <div className="flex flex-col md:flex-row w-full justify-around items-center m-auto mt-16 mb-16 px-4">
//       <div className="login mb-10 md:mb-28 w-full md:w-1/2 max-w-md">
//         <h1 className="text-2xl font-semibold mb-4">Login</h1>
//         <input
//           type="text"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//           placeholder="Enter your Email"
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           onChange={handleChange}
//           placeholder="Enter your Password"
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <button
//           onClick={login}
//           className="w-full p-2 bg-blue-500 text-white rounded-md text-xl mb-4"
//         >
//           Login
//         </button>
//         <ToastContainer />
//         <div className="text-center mb-4">OR</div>
//         <Link to="/register">
//           <button className="w-full p-2 bg-green-500 text-white rounded-md text-xl">
//             Register
//           </button>
//         </Link>
//       </div>
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img className="h-64 md:h-96 w-64 md:w-96" src="./login.gif" alt="login gif" />
//       </div>
//     </div>
//   );
// };






















import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginAdminId,
  loginAdminName,
  loginUser,
  loginUserName,
} from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:4000/login", user)
      .then((res) => {
        const userData = res.data.user;
        dispatch(loginUser(userData._id));
        dispatch(loginUserName(userData.name));
        if (userData.email === "kulalraghavendra21@gmail.com") {
          dispatch(loginAdminId(userData._id));
          dispatch(loginAdminName(userData.name));
          toast(`Welcome Admin ${userData.name}`, { type: "success" });
          setTimeout(() => navigate("/profile"), 4000);
        } else {
          toast("Successfully Login", { type: "success" });
          setTimeout(() => navigate("/profile"), 3000);
        }
      })
      .catch(() => {
        toast("Invalid Credentials", { type: "error" });
      });
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-around items-center m-auto mt-16 mb-16 px-4">
      <div className="login mb-10 md:mb-28 w-full md:w-1/2 max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={login}
          className="w-full p-2 bg-blue-500 text-white rounded-md text-xl mb-4"
        >
          Login
        </button>
        <ToastContainer />
        <div className="text-center mb-4">OR</div>
        <Link to="/register">
          <button className="w-full p-2 bg-green-500 text-white rounded-md text-xl">
            Register
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="h-64 md:h-96 w-64 md:w-96" src="./login.gif" alt="login gif" />
      </div>
    </div>
  );
};