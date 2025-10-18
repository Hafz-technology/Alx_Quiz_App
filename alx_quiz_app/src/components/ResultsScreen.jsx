const ResultsScreen = ({ score, totalQuestions, onRestart }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(0);

  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-xl mb-6 text-cyan-400">
        You scored {score} out of {totalQuestions} ({percentage}%)
      </p>
      <button
        onClick={onRestart}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-4 rounded-lg transition duration-300"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultsScreen;












