import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbarnew = () => {
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logouthandler = () => {
    if (userName || adminName) {
      dispatch(Logouthandleraction());
      toast.success("Successfully logged out");
      navigate("/");
    }
  };

  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* App Name */}
      <Link to="/" className="text-2xl font-bold tracking-wide text-yellow-400">
        QuizMaster<span className="text-blue-400"> Pro</span>
      </Link>

      {/* Navigation Options */}
      <div className="flex space-x-6 text-lg ml-auto pl-4 lg:pl-10">
        {userName || adminName ? (
          <>
            <button 
              onClick={() => navigate("/profile")} 
              className="hover:text-yellow-300 transition duration-300"
            >
              Profile
            </button>
            <button 
              onClick={logouthandler} 
              className="hover:text-red-400 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            to="/register" 
            className="hover:text-green-300 transition duration-300 font-medium"
          >
            Sign In
          </Link>
        )}
      </div>
      
      <ToastContainer />
    </nav>
  );
};
