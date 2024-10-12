import React, { useState, useEffect } from 'react';
import './App.css'; 
import quizData from './api/qeastion.json';  // Import the quiz data directly

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="quiz-app">
      <h1>Interactive Quiz</h1>
      {isFinished ? (
        <div className="result-container">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {quizData.length}</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>{quizData[currentQuestion].question}</h2>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
