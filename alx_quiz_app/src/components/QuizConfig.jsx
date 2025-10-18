// src/components/QuizConfig.jsx
import { useState } from 'react';

const QuizConfig = ({ onStartQuiz }) => {
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState('medium');
  const [category, setCategory] = useState(9); // Default to General Knowledge

  const categories = [
    { id: 9, name: "General Knowledge" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Computers" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 27, name: "Animals" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartQuiz(amount, difficulty, category);
  };

  const commonInputClass = "w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500";

  return (
    <div className="text-white text-center">
      <h1 className="text-4xl font-bold mb-8">Setup Quiz</h1>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto space-y-6">
        <div>
          <label htmlFor="amount" className="block text-left font-semibold mb-2">Number of Questions:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            max="50"
            className={commonInputClass}
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-left font-semibold mb-2">Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className={commonInputClass}>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="difficulty" className="block text-left font-semibold mb-2">Difficulty:</label>
          <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className={commonInputClass}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizConfig;



