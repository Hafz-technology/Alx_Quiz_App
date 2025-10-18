// src/api/quizApi.js
import { shuffleArray } from '../utils/shuffleArray';

export const fetchQuizQuestions = async (amount, difficulty, category) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Process the questions to combine and shuffle answers
    return data.results.map((question) => ({
      ...question,
      // Create a new 'answers' property with all shuffled answers
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }));
  } catch (error) {
    console.error("Failed to fetch quiz questions:", error);
    // You can re-throw the error or return a specific error object
    throw error;
  }
};

