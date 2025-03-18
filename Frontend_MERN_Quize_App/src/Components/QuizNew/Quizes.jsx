import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuiz } from "../../Redux/action.js";
import { Quiz } from "./Quiz";

export const Quizes = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const singleQuiz = useSelector((state) => state?.mernQuize?.QuizData) || [];
  const [isLoading, setLoading] = useState(true);

  console.log("Fetching Quiz Data for:", params);

  useEffect(() => {
    if (params?.id) {
      console.log("Dispatching getQuiz with ID:", params.id);
      dispatch(getQuiz(params));
    } else {
      console.error("Quiz ID is undefined");
    }
  }, [dispatch, params]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const questionArr = singleQuiz?.[0]?.questionArray || []; // Ensure it's always an array

  return isLoading || !singleQuiz.length ? (
    <div>
      <iframe
        className="w-4/5 h-96 ml-40"
        src="https://embed.lottiefiles.com/animation/9844"
        title="loading-animation"
      ></iframe>
    </div>
  ) : (
    <Quiz questionArr={questionArr} />
  );
};
