// import axios from "axios";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { postQuizObj, quizSuccess } from "../../Redux/action.js";

// export const QuizForm = () => {
//   const data = useSelector((state) => state.mernQuize.questions);
//   const dispatch = useDispatch();

//   const [ans, setAns] = useState([
//     { option: "", isCorrect: false, id: 0 },
//     { option: "", isCorrect: false, id: 1 },
//     { option: "", isCorrect: false, id: 2 },
//     { option: "", isCorrect: false, id: 3 },
//   ]);

//   const [quiz, setQuiz] = useState({
//     title: "",
//     questions: "",
//     options: ans,
//     correctAnswer: "",
//   });


//   const handleQuiz = (event) => {
//     event.preventDefault();
//     dispatch(quizSuccess(quiz));
//   };
//   const handleUploadnew = (event) => {
//     event.preventDefault();
//     const obj = {
//       title: data[0].title,
//       questionArray: data,
//     };

//     dispatch(postQuizObj(obj));
//   };
//   const handleType = (id) => (event) => {
//     const { name, value } = event.target;
//     setAns((prev) =>
//       ans?.map((item) =>
//         item.id === id
//           ? { ...item, [name]: value == "true" ? true : value }
//           : item
//       )
//     );
//     setQuiz({ ...quiz, options: ans });
//   };

//   return (
//     <div className="w-10/12 flex  text-slate-50">
//       <div className="w-1/2 mt-24 ml-32">
//         <img className="h-80 pl-36 mt-8" src="./feedback.gif" alt="feedback" />
//       </div>

//       <div className="">
//         <div className="flex text-yellow-500  w-96 font-bold font-serif mb-2 ml-12 mt-14">
//           <h1 className="text-2xl ">ADD QUESTIONS </h1>
//           <img src="./add.gif" alt="add icon" className="w-1/3 h-20 -mt-6" />
//         </div>
//         <form className="-mt-6">
//           <label
//             className="block uppercase tracking-wide  text-xs font-bold mb-2"
//             htmlFor="grid-first-name"
//           >
//             Title{" "}
//           </label>
//           <input
//             className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//             id="grid-first-name"
//             type="text"
//             placeholder="Title"
//             onChange={(event) => {
//               setQuiz({ ...quiz, title: event.target.value });
//             }}
//           />
//           <label
//             className="block uppercase tracking-wide text-xs font-bold mb-2"
//             htmlFor="grid-first-name"
//           >
//             Question{" "}
//           </label>
//           <input
//             className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//             id="grid-first-name"
//             type="text"
//             placeholder="Question"
//             onChange={(event) =>
//               setQuiz({ ...quiz, questions: event.target.value })
//             }
//           />
//           <label
//             className="block uppercase tracking-wide  text-xs font-bold mb-2"
//             htmlFor="grid-first-name"
//           >
//             Options
//           </label>
//           <div className="">
//             {ans?.map((x) => {
//               return (
//                 <div key={x.id} className="flex  gap-1 ">
//                   <input
//                     className="w-1/2 block  bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                     type="text"
//                     placeholder={`Option ${x.id}`}
//                     name="option"
//                     value={x.option}
//                     onChange={(e) => {
//                       handleType(x.id)(e);
//                     }}
//                   />
//                   <select
//                     className="form-select appearance-none
//                   block
//                   w-1/2
//                   px-3
//                 h-9
//                   text-base
//                   font-normal
//                   text-gray-700
//                   bg-white bg-clip-padding bg-no-repeat
//                   border border-solid border-gray-300
//                   rounded
//                   transition
//                   ease-in-out
//                   m-0
//                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     name="isCorrect"
//                     id=""
//                     v-model="allowMultiple"
//                     value={x.boolean}
//                     onChange={(e) => {
//                       handleType(x.id)(e);
//                     }}
//                   >
//                     <option value="">Select the value</option>
//                     <option value={true}>true</option>
//                   </select>
//                 </div>
//               );
//             })}
//           </div>
//           <label
//             className="block uppercase tracking-wide  text-xs font-bold mb-2"
//             htmlFor="grid-first-name"
//           >
//             Answer{" "}
//           </label>
//           <input
//             className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//             id="grid-first-name"
//             type="text"
//             placeholder="Answer"
//             onChange={(event) =>
//               setQuiz({ ...quiz, correctAnswer: event.target.value })
//             }
//           />
//           <div className="flex">
//             <button
//               onClick={handleQuiz}
//               className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
//             >
//               Submit
//             </button>
//             <button
//               onClick={handleUploadnew}
//               className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  ml-36 "
//             >
//               Upload
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import axios from "axios";

const AdminAddQuizPage = () => {
  const [quizData, setQuizData] = useState({
    title: "",
    category: "",
    difficulty: "easy",
    timer: "",
    questions: [],
  });

  // Handle input change for quiz details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuizData({ ...quizData, [name]: value });
  };

  // Add a new question (with 4 default options)
  const handleAddQuestion = () => {
    setQuizData({
      ...quizData,
      questions: [
        ...quizData.questions,
        {
          title: "",
          options: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
          ],
        },
      ],
    });
  };

  // Handle question text change
  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index][name] = value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  // Handle option text change
  const handleOptionChange = (qIndex, oIndex, e) => {
    const { value } = e.target;
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[qIndex].options[oIndex].text = value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  // Handle correct answer selection
  const handleCorrectOptionChange = (qIndex, oIndex) => {
    const updatedQuestions = [...quizData.questions];

    // Ensure only one correct answer per question
    updatedQuestions[qIndex].options.forEach((option, index) => {
      option.isCorrect = index === oIndex;
    });

    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  // Submit quiz data to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/admin", quizData); // Updated API
      alert("Quiz added successfully");
      setQuizData({
        title: "",
        category: "",
        difficulty: "easy",
        timer: "",
        questions: [],
      }); // Reset form after successful submission
    } catch (err) {
      console.error("Error adding quiz:", err);
      alert("Error adding quiz");
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Add New Quiz
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        {/* Quiz Title */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Quiz Title</label>
          <input
            type="text"
            name="title"
            value={quizData.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={quizData.category}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          >
            <option value="">Select Category</option>
            <option value="Mongo">Mongo</option>
            <option value="Express">Express</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Difficulty</label>
          <select
            name="difficulty"
            value={quizData.difficulty}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Timer */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Timer (seconds)</label>
          <input
            type="number"
            name="timer"
            value={quizData.timer}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <small className="text-gray-500">Leave blank for no timer</small>
        </div>

        {/* Questions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Questions</h3>
          {quizData.questions.map((question, qIndex) => (
            <div key={qIndex} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <div className="mb-2">
                <label className="block font-medium mb-1">Question {qIndex + 1}</label>
                <input
                  type="text"
                  name="title"
                  value={question.title}
                  onChange={(e) => handleQuestionChange(qIndex, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>

              {/* Options */}
              <div>
                <h4 className="text-sm font-medium">Options</h4>
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      name="text"
                      value={option.text}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                      required
                    />
                    <input
                      type="radio"
                      checked={option.isCorrect}
                      onChange={() => handleCorrectOptionChange(qIndex, oIndex)}
                      className="w-4 h-4 text-teal-500"
                    />
                    <label className="text-sm">Correct</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddQuestion}
            className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition duration-200"
          >
            + Add Question
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Save Quiz
        </button>
      </form>
    </div>
  );
};

export default AdminAddQuizPage;
