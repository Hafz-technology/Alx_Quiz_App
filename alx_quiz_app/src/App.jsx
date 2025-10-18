import { useState } from 'react';
import QuizConfig from './components/QuizConfig';
import ResultsScreen from './components/ResultsScreen';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions } from './api/opentdb';
import { shuffleArray } from './utils/shuffle';

export default function App() {
  const [gameState, setGameState] = useState('config');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startQuiz = async (config) => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedQuestions = await fetchQuestions(config);
      const formattedQuestions = fetchedQuestions.map((q) => ({
        ...q,
        answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
      }));
      setQuestions(formattedQuestions);
      setGameState('quiz');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // We will define handleAnswer, nextQuestion, and playAgain later

  const renderContent = () => {
    if (isLoading) return <div className="text-center text-lg">Loading Questions...</div>; // Loading state
    if (error) return <div className="text-center text-lg text-red-500">Error: {error}</div>; // Error state

    switch (gameState) {
      case 'quiz':
        return <QuestionCard 
                  question={questions[currentQuestionIndex]} 
                  // handleAnswer={handleAnswer} - we will uncomment this later
               />;
      case 'results':
        return <ResultsScreen score={score} totalQuestions={questions.length} /* playAgain={playAgain} */ />;
      case 'config':
      default:
        return <QuizConfig startQuiz={startQuiz} />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex justify-center items-center font-sans p-4">
      <div className="w-full max-w-2xl mx-auto p-4 md:p-8 bg-slate-800 rounded-2xl shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-8 drop-shadow-lg">
          Alx_Quiz_App
        </h1>
        {renderContent()}
      </div>
    </main>
  );
}
