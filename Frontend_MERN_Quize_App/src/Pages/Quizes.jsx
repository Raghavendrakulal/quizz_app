import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export const Quizes = () => {
  const { id } = useParams(); // Capture quiz ID from URL
  const navigate = useNavigate(); // Use navigate for navigation
  const userId = useSelector((state) => state.userId); // Get user ID from Redux store
  const userName = useSelector((state) => state.userName); // Get user name from Redux store
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/quiz/${id}`);
        console.log("Fetched Quiz:", response.data); // Debugging
        setQuiz(response.data);
      } catch (error) {
        setError(error.response?.data?.message || "Error fetching quiz data");
      }
    };

    fetchQuiz();
  }, [id]);

  const handleOptionChange = (questionIndex, optionText) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionText,
    }));
  };

  const handleSubmit = () => {
    console.log("User ID:", userId); // Debugging
    console.log("User Name:", userName); // Debugging

    if (Object.keys(answers).length !== quiz.questions.length) {
      alert("Please answer all the questions before submitting.");
      return;
    }
    setSubmitted(true);
    navigate("/quiz-results", { state: { quiz, answers, user: { id: userId, name: userName } } });
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!quiz) return <p>Loading quiz data...</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{quiz.title}</h1>
      <p className="text-gray-600 mb-4">Difficulty: {quiz.difficulty}</p>
      <h2 className="text-xl font-bold mb-4">Questions:</h2>

      {quiz.questions && quiz.questions.length > 0 ? (
        quiz.questions.map((question, index) => (
          <div key={index} className="mb-8 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">{index + 1}. {question.title}</h3>
            <ul className="mt-4">
              {question.options.map((option, i) => (
                <li key={i} className="text-gray-700">
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option.text}
                      checked={answers[index] === option.text}
                      onChange={() => handleOptionChange(index, option.text)}
                      className="mr-2"
                    />
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No questions available for this quiz.</p>
      )}

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mt-6 bg-teal-500 text-white px-4 py-2 rounded"
        >
          Submit Quiz
        </button>
      )}
    </div>
  );
};