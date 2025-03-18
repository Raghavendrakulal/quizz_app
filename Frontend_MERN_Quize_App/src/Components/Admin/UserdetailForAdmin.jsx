import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserByAdmin } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserdetailForAdmin = ({ data }) => {
  const dispatch = useDispatch();

  const DeleteUser = (id) => {
    if (id) {
      dispatch(deleteUserByAdmin(id));
      toast.success("Successfully Deleted the User");
    } else {
      toast.error("You can't delete the User");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="bg-teal-500 rounded-lg w-56 text-center text-white text-2xl font-bold p-4 mx-auto">
        <h1>List of Users</h1>
      </div>

      {/* User List */}
      <div className="flex flex-col container w-full max-w-lg md:max-w-2xl lg:max-w-4xl bg-teal-500 rounded-lg mt-6 mx-auto p-4">
        <ul className="flex flex-col divide-y w-full">
          {data.map((user) => (
            <li key={user._id} className="flex flex-row items-center p-4 bg-white rounded-lg shadow-md my-2">
              {/* Profile Image */}
              <div className="flex-shrink-0 w-12 h-12 mr-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
                  alt="profile"
                  className="object-cover rounded-full h-full w-full"
                />
              </div>

              {/* User Details */}
              <div className="flex-1">
                <h2 className="font-medium text-gray-800">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>

              {/* Delete Icon */}
              <button onClick={() => DeleteUser(user._id)} className="text-red-500 hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ToastContainer />
    </div>
  );
};
