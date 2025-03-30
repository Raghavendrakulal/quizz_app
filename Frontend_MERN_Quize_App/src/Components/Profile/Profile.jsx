import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const Profile = () => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);
  const [quizHistory, setQuizHistory] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      setUserName(decodedToken.name);
      setEmail(decodedToken.email);
      setRole(decodedToken.role);

      // Fetch quiz history from the backend
      const fetchQuizHistory = async () => {
        try {
          const response = await fetch(`http://localhost:4000/quiz/user/${decodedToken.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch quiz history");
          }
          const data = await response.json();
          setQuizHistory(data);
        } catch (error) {
          console.error("Error fetching quiz history:", error);
        }
      };

      fetchQuizHistory();
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
    if (window.confirm("Request has been sent to admin, your account will be deleted in the next 7 days.")) {
      console.log("Account delete request sent");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
  
    if (newPassword.length < 6) {
      setPasswordMessage("New password must be at least 6 characters long.");
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setPasswordMessage("New password and confirm password do not match.");
      return;
    }
  
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:4000/user/change-password",
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      setPasswordMessage(response.data.message);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowChangePassword(false);
    } catch (error) {
      setPasswordMessage(error.response?.data?.message || "Error changing password.");
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
      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full bg-teal-500 text-white w-64 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="mt-6 space-y-4">
            <li>
              <Link to="/categories" className="block text-lg hover:text-gray-200">Attempt Quiz</Link>
            </li>
            <li>
              <a href="#quiz-history" className="block text-lg hover:text-gray-200">Quiz History</a>
            </li>
            <li>
              <a href="#profile-details" className="block text-lg hover:text-gray-200">Profile Details</a>
            </li>
            <li>
              <a href="#notifications" className="block text-lg hover:text-gray-200">Notifications</a>
            </li>
            <li>
              <button onClick={handleLogout} className="block text-lg hover:text-gray-200 focus:outline-none">Logout</button>
            </li>
            <li>
              <button onClick={() => setShowChangePassword(true)} className="block text-lg hover:text-gray-200 focus:outline-none">Change Password</button>
            </li>
            <li>
              <button onClick={handleDeleteAccount} className="block text-lg hover:text-gray-200 focus:outline-none">Delete Account</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Toggle Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="fixed top-4 left-4 z-50 bg-teal-500 text-white p-2 rounded-md focus:outline-none">
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>

      {/* Profile Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-sky-600">{getGreeting()}, {userName || "Guest"}! 👋</h1>
        <h1 className="text-teal-500 text-2xl font-extrabold italic mt-6">Sweat more in practice, bleed less in war.</h1>
        <p className="text-gray-700 font-bold mt-2">– Spartan Warrior Credo</p>

        {/* Profile Details */}
        <div id="profile-details" className="mt-10">
          <h2 className="text-xl font-bold">Profile Details</h2>
          <p><strong>Name:</strong> {userName || "Guest"}</p>
          <p><strong>Email:</strong> {email || "N/A"}</p>
          <p><strong>Role:</strong> {role || "User"}</p>
        </div>

        {/* Quiz History */}
        <div id="quiz-history" className="mt-10">
          <h2 className="text-xl font-bold">Quiz History</h2>
          {quizHistory.length === 0 ? (
            <p>No quiz history available.</p>
          ) : (
            <ul>
              {quizHistory.map((quiz, index) => (
                <li key={index}>
                  <strong>Category:</strong> {quiz.category || "N/A"} |
                  <strong> Score:</strong> {quiz.score || "N/A"} |
                  <strong> Attempted At:</strong> {new Date(quiz.attemptedAt).toLocaleString()}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Change Password Modal */}
        {showChangePassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Change Password</h2>
              {passwordMessage && <p className="text-red-500">{passwordMessage}</p>}
              <form onSubmit={handleChangePassword}>
                <label>Old Password:</label>
                <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="w-full p-2 border rounded mb-2" required />
                
                <label>New Password:</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full p-2 border rounded mb-2" required />
                
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 border rounded mb-4" required />
                
                <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">Change Password</button>
                <button onClick={() => setShowChangePassword(false)} className="ml-4 bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
