import { useState } from 'react';

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 17, name: "Science & Nature" },
  { id: 21, name: "Sports" },
  { id: 22, name: "Geography" },
  { id: 23, name: "History" },
];

export default function QuizConfig({ startQuiz }) {
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    startQuiz({ amount, category, difficulty });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="amount" className="mb-2 text-slate-300">Number of Questions:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} min="1" max="50" className="p-2 rounded-md bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
      </div>

      <div className="flex flex-col">
        <label htmlFor="category" className="mb-2 text-slate-300">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 rounded-md bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="difficulty" className="mb-2 text-slate-300">Difficulty:</label>
        <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="p-2 rounded-md bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 font-bold py-3 px-4 rounded-lg transition-colors duration-300 mt-4">
        Start Quiz
      </button>
    </form>
  );
}