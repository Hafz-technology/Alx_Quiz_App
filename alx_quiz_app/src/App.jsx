import { useState } from 'react';
import { fetchQuizQuestions } from './api/quizApi';
import QuizConfig from './components/QuizConfig';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';


const QUIZ_STATE = {
  CONFIG: 'configuring',
  IN_PROGRESS: 'in_progress',
  FINISHED: 'finished',
};

function App() {
  const [quizState, setQuizState] = useState(QUIZ_STATE.CONFIG);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startQuiz = async (amount, difficulty, category) => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedQuestions = await fetchQuizQuestions(amount, difficulty, category);
      if (fetchedQuestions.length === 0) {
        throw new Error("No questions found for the selected criteria. Please try different options.");
      }
      setQuestions(fetchedQuestions);
      setScore(0);
      setCurrentQuestionIndex(0);
      setQuizState(QUIZ_STATE.IN_PROGRESS);
    } catch (err) {
      setError(err.message);
      setQuizState(QUIZ_STATE.CONFIG); 
    } finally {
      setIsLoading(false);
    }
  };

  
  const handleAnswerClick = (answer) => {
    // Check if the selected answer is correct
    const isCorrect = answer === questions[currentQuestionIndex].correct_answer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question or finish the quiz
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizState(QUIZ_STATE.FINISHED);
    }
  };

    const restartQuiz = () => {
            // Reset all state values to their initial state
            setQuestions([]);
            setScore(0);
            setCurrentQuestionIndex(0);
            setError(null);
            setQuizState(QUIZ_STATE.CONFIG);
          };

  


  const renderContent = () => {
    if (isLoading) {
      return <p className="text-white text-2xl">Loading questions...</p>;
    }

    if (error && quizState === QUIZ_STATE.CONFIG) {
        return <p className="text-red-500 text-lg">{error}</p>
    }

    switch (quizState) {
      case QUIZ_STATE.IN_PROGRESS:
        return (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswerClick={handleAnswerClick}
          />
        );
      case QUIZ_STATE.FINISHED:
        return (
          <ResultsScreen
            score={score}
            totalQuestions={questions.length}
            onRestart={restartQuiz}
          />
        );
      case QUIZ_STATE.CONFIG:
      default:
        return <QuizConfig onStartQuiz={startQuiz} />;
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center p-4">
      {renderContent()}
    </div>
  );
}

export default App;


