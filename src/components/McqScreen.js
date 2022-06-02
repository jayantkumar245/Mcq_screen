import { useState } from "react";
import McqResult from "./McqResult";
import QuestionList from "../data/questions.json";
import Question from "./Question";

export default function McqScreen(retry) {
  function calculateResult() {
    let correct = 0;
    QuestionList.forEach((question, index) => {
      if (question.correctOptionIndex === markedAnswer[index]) {
        correct++;
      }
    });
    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100)
    };
  }
  const [currentQuestionIndex, setCurrentQuestinIndex] = useState(0);
  const [markedAnswer, setMarkAnswer] = useState(
    new Array(QuestionList.length)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;
  return (
    <div className="Mcq-screen">
      {isQuestionEnd ? (
        <McqResult result={calculateResult()} retry={retry} />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestin={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkAnswer((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex + 1] = index;
              return newArr;
            });
            setCurrentQuestinIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
}
