// src/components/QuestionCard.jsx
import { useState, useEffect } from 'react';

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const QuestionCard = ({ question, onAnswerClick }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset local state when the question prop changes
  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]);

  const handleAnswerSelection = (answer) => {
    if (isAnswered) return; // Prevent changing answer

    setIsAnswered(true);
    setSelectedAnswer(answer);

    // Wait a bit before moving to the next question to show feedback
    setTimeout(() => {
      onAnswerClick(answer);
    }, 1000); // 1-second delay
  };

  const getButtonClass = (answer) => {
    if (!isAnswered) {
      return "bg-slate-700 hover:bg-cyan-500";
    }

    const isCorrect = answer === question.correct_answer;
    if (isCorrect) {
      return "bg-green-600"; // Correct answer is always green
    }

    if (answer === selectedAnswer && !isCorrect) {
      return "bg-red-600"; // Selected wrong answer is red
    }

    return "bg-slate-700 opacity-50"; // Other incorrect options
  };

  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-2xl text-white">
      <p className="text-md mb-4 text-slate-400">Category: {question.category}</p>
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">
        {decodeHTML(question.question)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.answers.map((answer) => (
          <button
            key={decodeHTML(answer)}
            onClick={() => handleAnswerSelection(answer)}
            disabled={isAnswered}
            className={`text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ${getButtonClass(answer)} ${isAnswered ? 'cursor-not-allowed' : ''}`}
          >
            {decodeHTML(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;



