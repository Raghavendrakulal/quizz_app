import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
  import {jwtDecode} from "jwt-decode";

export const Profile = () => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token, redirect to login
      navigate("/login");
      return;
    }

    try {
      // Decode the token to extract user information
      const decodedToken = jwtDecode(token);

      // Check if the token is expired
      const currentTime = Date.now() / 1000; // Current time in seconds
      if (decodedToken.exp < currentTime) {
        // Token is expired
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      // Set the user's name from the token
      setUserName(decodedToken.name);
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl rounded-lg p-6 text-center">
      {/* Motivational Quote */}
      <h1 className="text-teal-500 text-2xl font-extrabold italic mt-6 md:text-3xl">
        Sweat more in practice, bleed less in war.
      </h1>
      <p className="text-gray-700 font-bold mt-2 text-sm md:text-base">
        – Spartan Warrior Credo
      </p>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10">
        <img src="./profile.gif" alt="Profile" className="w-40 md:w-64 h-auto" />
        <h1 className="mt-6 md:mt-0 md:ml-8 text-2xl text-sky-600">
          Welcome, {userName || "Guest"}! 👋
        </h1>
      </div>

      {/* Attempt Quiz Button */}
      <div className="mt-6">
        <Link to="/categories">
          <button className="bg-teal-500 text-white text-lg font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition">
            Attempt Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};