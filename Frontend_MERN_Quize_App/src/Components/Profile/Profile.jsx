import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export const Profile = () => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);
  const [quizHistory, setQuizHistory] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the sidebar
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

      // Set user details from the token
      setUserName(decodedToken.name);
      setEmail(decodedToken.email);
      setRole(decodedToken.role);

      // Fetch quiz history (mock data for now)
      setQuizHistory([
        { quizName: "General Knowledge", score: "8/10", date: "March 25, 2025" },
        { quizName: "Science", score: "7/10", date: "March 20, 2025" },
      ]);
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Call delete account API (mocked for now)
      console.log("Account deleted");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-teal-500 text-white w-64 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="mt-6 space-y-4">
            <li>
              <Link to="/categories" className="block text-lg hover:text-gray-200">
                Attempt Quiz
              </Link>
            </li>
            <li>
              <a href="#quiz-history" className="block text-lg hover:text-gray-200">
                Quiz History
              </a>
            </li>
            <li>
              <a href="#profile-details" className="block text-lg hover:text-gray-200">
                Profile Details
              </a>
            </li>
            <li>
              <a href="#notifications" className="block text-lg hover:text-gray-200">
                Notifications
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block text-lg hover:text-gray-200 focus:outline-none"
              >
                Logout
              </button>
            </li>
            <li>
              <button
                onClick={handleDeleteAccount}
                className="block text-lg hover:text-gray-200 focus:outline-none"
              >
                Delete Account
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 left-4 z-50 bg-teal-500 text-white p-2 rounded-md focus:outline-none"
      >
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Personalized Greeting */}
        <h1 className="text-2xl font-bold text-sky-600">
          {getGreeting()}, {userName || "Guest"}! 👋
        </h1>

        {/* Motivational Quote */}
        <h1 className="text-teal-500 text-2xl font-extrabold italic mt-6 md:text-3xl">
          Sweat more in practice, bleed less in war.
        </h1>
        <p className="text-gray-700 font-bold mt-2 text-sm md:text-base">
          – Spartan Warrior Credo
        </p>

        {/* Profile Section */}
        <div id="profile-details" className="flex flex-col md:flex-row items-center justify-center mt-10">
          <img src="./profile.gif" alt="Profile" className="w-40 md:w-64 h-auto rounded-full" />
          <div className="mt-6 md:mt-0 md:ml-8">
            <h2 className="text-xl font-bold">Name: {userName || "Guest"}</h2>
            <p className="text-lg">Email: {email || "N/A"}</p>
            <p className="text-lg">Role: {role || "User"}</p>
          </div>
        </div>

        {/* Quiz History */}
        <div id="quiz-history" className="mt-10">
          <h2 className="text-xl font-bold text-gray-800">Quiz History</h2>
          <ul className="mt-4">
            {quizHistory.map((quiz, index) => (
              <li key={index} className="text-gray-700">
                <strong>Quiz:</strong> {quiz.quizName} | <strong>Score:</strong> {quiz.score} | <strong>Date:</strong> {quiz.date}
              </li>
            ))}
          </ul>
        </div>

        {/* Notifications */}
        <div id="notifications" className="mt-10">
          <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
          <ul className="mt-4">
            <li className="text-gray-700">📢 New quiz on "History" is now available!</li>
            <li className="text-gray-700">📢 Your quiz results for "Science" have been updated.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};