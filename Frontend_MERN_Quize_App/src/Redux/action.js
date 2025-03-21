// import * as types from "./actiontype.js";  
// import axios from "axios";  
// import { API_BASE_URL } from "./config.js";  

// // Create quiz in redux store  
// export const quizRequest = () => {  
//   return {  
//     type: types.CREATE_QUIZ_REQUEST,  
//   };  
// };  

// export const quizSuccess = (quiz) => {  
//   return {  
//     type: types.CREATE_QUIZ_SUCCESS,  
//     payload: quiz,  
//   };  
// };  

// export const quizFailure = (error) => {  
//   return {  
//     type: types.CREATE_QUIZ_FAILURE,  
//     payload: error,  
//   };  
// };  

// const getCurrentQuizRequest = (payload) => {  
//   return {  
//     type: types.GET_CURRENT_QUIZ_REQUEST,  
//     payload,  
//   };  
// };  
// const getCurrentQuizSuccess = (payload) => {  
//   return {  
//     type: types.GET_CURRENT_QUIZ_SUCCESS,  
//     payload,  
//   };  
// };  
// const getCurrentQuizFailure = (payload) => {  
//   return {  
//     type: types.GET_CURRENT_QUIZ_FAILURE,  
//     payload,  
//   };  
// };  
// const getCountSuccess = (payload) => {  
//   return {  
//     type: types.GETCOUNTDATA,  
//     payload,  
//   };  
// };  

// //---------- login user ----------  

// export const loginUserName = (payload) => {  
//   return {  
//     type: types.GETUSERNAME,  
//     payload,  
//   };  
// };  
// export const loginUser = (payload) => {  
//   return {  
//     type: types.GETUSERID,  
//     payload,  
//   };  
// };  

// export const Logouthandleraction = (payload) => {  
//   return {  
//     type: types.LOGOUTUSER,  
//     payload,  
//   };  
// };  

// export const loginAdminId = (payload) => {  
//   return {  
//     type: types.GETADMINID,  
//     payload,  
//   };  
// };  
// export const loginAdminName = (payload) => {  
//   return {  
//     type: types.GETADMINNAME,  
//     payload,  
//   };  
// };  

// // ----------------------- action creator function for details of user for admin page ---------------  

// const getAllUserDataRequest = (payload) => {  
//   return {  
//     type: types.GET_ALL_USER_DATA_REQUEST,  
//     payload,  
//   };  
// };  

// const getAllUserDataSuccess = (payload) => {  
//   return {  
//     type: types.GET_ALL_USER_DATA_SUCCESS,  
//     payload,  
//   };  
// };  

// const getAllUserDataFailure = (payload) => {  
//   return {  
//     type: types.GET_ALL_USER_DATA_FAILURE,  
//     payload,  
//   };  
// };  

// // ----------------------- details of user for admin page and delete user by admin ---------------  

// export const getAllUserDataFromBackend = () => async (dispatch) => {  
//   dispatch(getAllUserDataRequest());  
//   try {  
//     const res = await axios.get("http://localhost:4000/getuser");  
//     dispatch(getAllUserDataSuccess(res.data));  
//   } catch (err) {  
//     dispatch(getAllUserDataFailure());  
//   }  
// };  

// export const deleteUserByAdmin = (userId) => async (dispatch) => {  
//   try {  
//     await axios.delete(`http://localhost:4000/user/${userId}`);  
//     dispatch(getAllUserDataFromBackend());  
//   } catch (error) {  
//     console.error("Error deleting user:", error.message);  
//   }  
// };  

// // ----------post quiz--------------  

// export const postQuizObj = (obj) => (dispatch) => {
//   axios
//     .post("http://localhost:4000/admin", obj)
//     .then((res) => {
//       // Handle success if needed
//     })
//     .catch((err) => {
//       console.error("Error posting quiz:", err);
//     });
// };


// // ----------------------------- fetching quiz data subject wise -------------  

// const fetchQuizRequest = (payload) => {  
//   return {  
//     type: types.FETCH_QUIZ_REQUEST,  
//     payload,  
//   };  
// };  
// const fetchQuizSuccess = (payload) => {  
//   return {  
//     type: types.FETCH_QUIZ_SUCCESS,  
//     payload,  
//   };  
// };  
// const fetchQuizFailure = (payload) => {  
//   return {  
//     type: types.FETCH_QUIZ_FAILURE,  
//     payload,  
//   };  
// };  
// export const fetchQuizDataFrombackend = () => (dispatch) => {  
//   axios  
//     .get("http://localhost:4000/api/quiz")  
//     .then((res) => dispatch(fetchQuizSuccess(res.data)))  
//     .catch((err) => console.log(err));  
// };  

// export const getQuiz = (params) => (dispatch) => {
//   if (!params?.id) {
//     console.error("Quiz ID is missing in params:", params);
//     return;
//   }

//   console.log("Fetching quiz for ID:", params.id);
//   dispatch(fetchQuizRequest());

//   axios
//     .get(`http://localhost:4000/quiz/${params.id}`)
//     .then((res) => {
//       console.log("Quiz Data Received:", res.data);
//       dispatch(fetchQuizSuccess(res.data));
//     })
//     .catch((err) => {
//       console.error("Error fetching quiz:", err.message);
//       dispatch(fetchQuizFailure(err.message));
//     });
// };
  

// //------------posting the user quiz result ------------  

// //  -----------posting user result ------------  

// export const postUserResult = (ans) => {  
//   return {  
//     type: types.SET_USER_RESULT_SUCCESS,  
//     payload: ans,  
//   };  
// };  

// // ------action creator function and axios function =-------  

// const postUserResultRequest = (ans) => {  
//   return {  
//     type: types.POST_USER_RESULT_SUCCESS,  
//     payload: ans,  
//   };  
// };  
// const postUserResultSuccess = (ans) => {  
//   return {  
//     type: types.POST_USER_RESULT_SUCCESS,  
//     payload: ans,  
//   };  
// };  
// const postUserResultFailure = (ans) => {  
//   return {  
//     type: types.POST_USER_RESULT_SUCCESS,  
//     payload: ans,  
//   };  
// };  
// export const postQuizResult = (obj) => (dispatch) => {  
//   const { quizId, userId, quizResult } = obj;  
//   dispatch(postUserResultRequest());  
//   axios  
//     .post(`http://localhost:4000/userResult/${userId}`, obj)  
//     .then((res) => {  
//       dispatch(postUserResultSuccess(res.data));  
//     })  
//     .catch((err) => {  
//       dispatch(postUserResultFailure(err));  
//     });  
// };  





import * as types from "./actiontype.js";
import axios from "axios";
import { API_BASE_URL } from "./config.js";

// Create quiz in redux store
export const quizRequest = () => {
  return {
    type: types.CREATE_QUIZ_REQUEST,
  };
};

export const quizSuccess = (quiz) => {
  return {
    type: types.CREATE_QUIZ_SUCCESS,
    payload: quiz,
  };
};

export const quizFailure = (error) => {
  return {
    type: types.CREATE_QUIZ_FAILURE,
    payload: error,
  };
};

const getCurrentQuizRequest = (payload) => {
  return {
    type: types.GET_CURRENT_QUIZ_REQUEST,
    payload,
  };
};
const getCurrentQuizSuccess = (payload) => {
  return {
    type: types.GET_CURRENT_QUIZ_SUCCESS,
    payload,
  };
};
const getCurrentQuizFailure = (payload) => {
  return {
    type: types.GET_CURRENT_QUIZ_FAILURE,
    payload,
  };
};
const getCountSuccess = (payload) => {
  return {
    type: types.GETCOUNTDATA,
    payload,
  };
};

// Login user actions
export const loginUserName = (payload) => {
  return {
    type: types.GETUSERNAME,
    payload,
  };
};
export const loginUser = (payload) => {
  return {
    type: types.GETUSERID,
    payload,
  };
};

export const Logouthandleraction = (payload) => {
  return {
    type: types.LOGOUTUSER,
    payload,
  };
};

export const loginAdminId = (payload) => {
  return {
    type: types.GETADMINID,
    payload,
  };
};
export const loginAdminName = (payload) => {
  return {
    type: types.GETADMINNAME,
    payload,
  };
};

// Fetching quiz data
const fetchQuizRequest = (payload) => {
  return {
    type: types.FETCH_QUIZ_REQUEST,
    payload,
  };
};
const fetchQuizSuccess = (payload) => {
  return {
    type: types.FETCH_QUIZ_SUCCESS,
    payload,
  };
};
const fetchQuizFailure = (payload) => {
  return {
    type: types.FETCH_QUIZ_FAILURE,
    payload,
  };
};
export const fetchQuizDataFrombackend = () => (dispatch) => {
  axios
    .get("http://localhost:4000/api/quiz")
    .then((res) => dispatch(fetchQuizSuccess(res.data)))
    .catch((err) => console.log(err));
};

export const getQuiz = (params) => (dispatch) => {
  if (!params?.id) {
    console.error("Quiz ID is missing in params:", params);
    return;
  }

  console.log("Fetching quiz for ID:", params.id);
  dispatch(fetchQuizRequest());

  axios
    .get(`http://localhost:4000/quiz/${params.id}`)
    .then((res) => {
      console.log("Quiz Data Received:", res.data);
      dispatch(fetchQuizSuccess(res.data));
    })
    .catch((err) => {
      console.error("Error fetching quiz:", err.message);
      dispatch(fetchQuizFailure(err.message));
    });
};

// Posting user result
export const postUserResult = (ans) => {
  return {
    type: types.SET_USER_RESULT_SUCCESS,
    payload: ans,
  };
};

// Action creator functions for user result
const postUserResultRequest = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
const postUserResultSuccess = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
const postUserResultFailure = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
export const postQuizResult = (obj) => (dispatch) => {
  const { quizId, userId, quizResult } = obj;
  dispatch(postUserResultRequest());
  axios
    .post(`http://localhost:4000/userResult/${userId}`, obj)
    .then((res) => {
      dispatch(postUserResultSuccess(res.data));
    })
    .catch((err) => {
      dispatch(postUserResultFailure(err));
    });
};

// Action creator functions for user data
const getAllUserDataRequest = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_REQUEST,
    payload,
  };
};

const getAllUserDataSuccess = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_SUCCESS,
    payload,
  };
};

const getAllUserDataFailure = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_FAILURE,
    payload,
  };
};

// Fetch all user data from backend
export const getAllUserDataFromBackend = () => async (dispatch) => {
  dispatch(getAllUserDataRequest());
  try {
    const res = await axios.get("http://localhost:4000/getuser");
    dispatch(getAllUserDataSuccess(res.data));
  } catch (err) {
    dispatch(getAllUserDataFailure(err));
  }
};

// Delete user by admin
export const deleteUserByAdmin = (userId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:4000/user/${userId}`);
    dispatch(getAllUserDataFromBackend());
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
};