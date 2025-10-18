# Alx_Quiz_App
FE Capstone Project







# Alx_Quiz_App

A dynamic and responsive quiz application built with React, Vite, and Tailwind CSS. Test your knowledge across various categories with questions fetched in real-time from the Open Trivia Database.



## Live Demo

**Check out the live version here:** [https://hafztech.com/AlxQuizApp.html]





## Features ✨

-   **Dynamic Quiz Configuration**: Users can select the number of questions, category, and difficulty level.
-   **Real-time Question Fetching**: Integrates with the Open Trivia Database API for a vast library of questions.
-   **Interactive UI**: A clean, single-question format with immediate visual feedback for correct and incorrect answers.
-   **Score Tracking**: Displays a final score and percentage upon quiz completion.
-   **Play Again**: Seamlessly restart the quiz with new configurations.
-   **Fully Responsive**: Looks great on all devices, from mobile phones to widescreen desktops.
-   **Error Handling**: Gracefully handles API errors or cases where no questions are found.

---

## Tech Stack 🛠️

-   **Frontend:** React
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS
-   **API:** Open Trivia Database
-   **Deployment:** Netlify

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### **Prerequisites**

You'll need [Node.js](https://nodejs.org/) (version 16 or later) and `npm` installed on your computer.

### **Installation & Setup**

1.  **Clone the repository:**
        https://github.com/Hafz-technology/Alx_Quiz_App
2.  **Navigate to the project directory:**
    ```sh
    cd alx-quiz-app
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### **Running the Application**

1.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application will be running at `http://localhost:5173`.

2.  **Build for production:**
    To create an optimized production build, run:
    ```sh
    npm run build
    ```
    This creates a `dist` folder with all the files ready for deployment.

---

## Author

**Khalil Hafez**

-   **GitHub:** https://github.com/Hafz-technology


---

## License

This project is licensed under the MIT License.



# The Project Idea: Interactive Quiz Application

The core idea is to build a responsive, interactive web application that challenges users' knowledge. It will serve as a platform where users can select a topic, answer a series of multiple-choice questions, and immediately see their results.

# Main Features


##  Setup & Configuration

A Start Screen where users can configure their quiz: select topic/category, difficulty, and the number of questions.

## Core Quiz Functionality

Display questions one by one, handle user selection of an answer, track the score, and progress to the next question.

## User Interface & Design

A clean, intuitive, and responsive interface styled with Tailwind CSS for all devices, with clear feedback for correct/incorrect answers.

## Results & Feedback

A Final Score Screen displaying the total score, percentage, and an option to "Play Again" which restarts the quiz.

# API Integration

The application will be powered by the Open Trivia Database (OTDb) for a vast supply of questions across various categories and difficulties.

Project Structure

This project will be built using the React Framework with Tailwind CSS for styling. 



# Basic Timeline

## Phase 1: Foundation & Styling

* Setup: Initialize the project, install and configure Tailwind CSS.

* State Management: Define the primary application state strategy.

* Static UI: Build the static UI for the Start and Results screens with basic styling.

## Phase 2: Core Functionality & API

* API Integration: Create the fetchQuestions function to pull data from OTDb.

* Quiz Logic: Implement state for the quiz itself (questions, current index, score, loading status).

* Question Card: Create the QuestionCard component to display a single question and its answers.

* Start Quiz: Implement the logic to start the quiz based on user configuration.

## Phase 3: Interactivity & Feedback

* Answer Handling: Implement logic for user answer selection, including disabling buttons and highlighting correct/incorrect choices.

* Navigation: Implement the "Next Question" logic to progress through the quiz.

* Finish Quiz: Implement the logic to transition to the Results Screen after the final question.

# Phase 4: Polish & Deployment

* Error Handling: Add user-friendly error handling for API call failures.

* Refinement: Review and refine the UI/UX, ensuring full responsiveness.

* Deployment: Build the application and deploy it to a hosting platform.

