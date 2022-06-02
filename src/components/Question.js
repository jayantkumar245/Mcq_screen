import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
export default function Question(
  question,
  totalQuestion,
  currentQuestion,
  setAnswer
) {
  const [selectoption, setSelectOption] = useState(null);
  const timer = useRef(null);
  const progressbar = useRef(null);
  function gotoNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectoption);
    });
    setSelectOption(null);
  }
  useEffect(() => {
    progressbar.current.classList.remove("active");
    setTimeout(() => {
      progressbar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(gotoNextQuestion, 10 * 1000);
    return gotoNextQuestion;
  });
  return (
    <div className="question">
      <div className="progress-bar" ref={progressbar}></div>
      <div className="question-count">
        <b>{currentQuestion}</b> of
        <b>{totalQuestion}</b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question:</span>
          <p>{question.title}</p>
        </div>
        <div className="options">
          {question.options.map((option, index) => {
            return (
              <div
                className={index === selectoption ? "option active" : "option"}
                key={index}
                onClick={() => setSelectOption(index)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="control">
        <button onClick={gotoNextQuestion}>Next</button>
      </div>
    </div>
  );
}
