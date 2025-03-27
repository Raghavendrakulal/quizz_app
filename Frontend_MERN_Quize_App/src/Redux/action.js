import axios from "axios";
import * as types from "./actiontype.js";

// Action to fetch all user data
export const getAllUserDataFromBackend = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  dispatch({ type: types.GET_ALL_USER_DATA_REQUEST });

  try {
    const response = await axios.get("http://localhost:4000/getuser", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: types.GET_ALL_USER_DATA_SUCCESS,
      payload: response.data, // Pass the fetched user data
    });
  } catch (error) {
    dispatch({
      type: types.GET_ALL_USER_DATA_FAILURE,
      payload: error.response?.data?.message || "Error fetching user data",
    });
  }
};

// Delete user by admin
export const deleteUserByAdmin = (userId) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    await axios.delete(`http://localhost:4000/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Optionally, fetch updated user data after deletion
    dispatch(getAllUserDataFromBackend());
  } catch (error) {
    console.error("Error deleting user:", error.response?.data?.message);
  }
};

// Logout handler
export const Logouthandleraction = () => (dispatch) => {
  localStorage.removeItem("token");

  dispatch({
    type: "LOGOUTUSER",
  });
};

// Login user actions
export const loginUser = (userId) => ({
  type: "GETUSERID",
  payload: userId,
});

export const loginUserName = (userName) => ({
  type: "GETUSERNAME",
  payload: userName,
});

// Login admin actions
export const loginAdminId = (adminId) => ({
  type: "GETADMINID",
  payload: adminId,
});

export const loginAdminName = (adminName) => ({
  type: "GETADMINNAME",
  payload: adminName,
});