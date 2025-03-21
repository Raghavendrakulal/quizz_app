// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getAllUserDataFromBackend } from "../../Redux/action.js";
// import { UserdetailForAdmin } from "./UserdetailForAdmin.jsx";

// export const Admin = () => {
//   const allUsers = useSelector((state) => state.mernQuize.Alluser);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const addquiz = () => {
//     navigate("/addquiz");
//   };

//   useEffect(() => {
//     dispatch(getAllUserDataFromBackend());
//   }, [dispatch]);

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-8">
//       {/* Admin Welcome Section */}
//       <div className="bg-gray-100/10 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg">
//         <div className="md:w-7/12 flex flex-col items-center md:items-start">
//           <img
//             className="h-32 w-64 rounded-full mb-4 md:ml-8"
//             src="./admin.gif"
//             alt="Admin"
//           />
//           <h1 className="text-3xl md:text-4xl font-semibold text-black flex items-center">
//             Hi Admin, <span className="text-sky-500 ml-2">admin 👋</span>
//           </h1>
//           <p className="text-lg text-gray-700 mt-4 text-center md:text-left px-4 md:px-0">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum delectus voluptatum doloribus,
//             nulla ullam quia, possimus est, veniam numquam aliquam eaque optio labore ex quidem ipsum nam. Amet, eum.
//           </p>
//           {/* Social Links */}
//           <div className="flex space-x-4 mt-6">
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path
//                   fillRule="evenodd"
//                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 <path
//                   fillRule="evenodd"
//                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Admin Image */}
//         <div className="md:w-5/12 flex justify-center md:justify-end mt-6 md:mt-0">
//           <img src="./sudhir.jpg" alt="Admin" className="h-60 w-60 md:h-72 md:w-72 rounded-full" />
//         </div>
//       </div>

//       {/* Add Quiz Button */}
//       <div className="flex justify-end mt-8">
//         <button
//           onClick={addquiz}
//           className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-700 transition"
//         >
//           ADD QUIZ
//         </button>
//       </div>

//       {/* User Details */}
//       <UserdetailForAdmin data={allUsers} />
//     </div>
//   );
// };


















import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserDataFromBackend } from "../../Redux/action.js";
import { UserdetailForAdmin } from "./UserdetailForAdmin.jsx";

export const Admin = () => {
  const allUsers = useSelector((state) => state.mernQuize.Alluser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addquiz = () => {
    navigate("/addquiz");
  };

  useEffect(() => {
    dispatch(getAllUserDataFromBackend());
  }, [dispatch]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-8">
      {/* Admin Welcome Section */}
      <div className="bg-gray-100/10 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg">
        <div className="md:w-7/12 flex flex-col items-center md:items-start">
          <img
            className="h-32 w-64 rounded-full mb-4 md:ml-8"
            src="./admin.gif"
            alt="Admin"
          />
          <h1 className="text-3xl md:text-4xl font-semibold text-black flex items-center">
            Hi Admin, <span className="text-sky-500 ml-2">admin 👋</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4 text-center md:text-left px-4 md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum delectus voluptatum doloribus,
            nulla ullam quia, possimus est, veniam numquam aliquam eaque optio labore ex quidem ipsum nam. Amet, eum.
          </p>
          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Admin Image */}
        <div className="md:w-5/12 flex justify-center md:justify-end mt-6 md:mt-0">
          <img src="./sudhir.jpg" alt="Admin" className="h-60 w-60 md:h-72 md:w-72 rounded-full" />
        </div>
      </div>

      {/* Add Quiz Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={addquiz}
          className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          ADD QUIZ
        </button>
      </div>

      {/* User Details */}
      <UserdetailForAdmin data={allUsers} />
    </div>
  );
};