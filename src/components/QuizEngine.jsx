import { useState, useEffect } from 'react';
import { quizzes, currentSession } from '../store/Storage.jsx';
import TimeDisplay from '../store/TimeDisplay.jsx';

const QuizEngine = ({ onQuizComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [questionStartTimes, setQuestionStartTimes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize timer with 15 minutes--------------------------------------------------------------------
  const timer = TimeDisplay({ 
    initialTimeInMinutes: 15,
    onTimeUp: handleTimeUp 
  });

  // Load questions based on difficulty level-------------------------------------------------------------
  useEffect(() => {
    if (currentSession.difficulty) {
      const difficultyQuestions = quizzes[currentSession.difficulty] || [];
      setQuestions(difficultyQuestions);

      // Initialize selected answers array with nulls
      setSelectedAnswers(new Array(difficultyQuestions.length).fill(null));

      // Initialize question start times with current time for the first question
      const times = new Array(difficultyQuestions.length).fill(null);
      times[0] = Date.now();
      setQuestionStartTimes(times);
    }
  }, []);

  // Handle time up event-----------------------------------------------------------------------------------
  function handleTimeUp() {
    handleSubmit();
  }

  // Handle option selection--------------------------------------------------------------------------------
  const handleOptionSelect = (optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Navigate to next question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Record time spent on current question
      recordQuestionTime();

      // Move to next question
      setCurrentQuestionIndex(prevIndex => {
        const newIndex = prevIndex + 1;

        // Set start time for the next question if it hasn't been visited yet
        if (questionStartTimes[newIndex] === null) {
          const newTimes = [...questionStartTimes];
          newTimes[newIndex] = Date.now();
          setQuestionStartTimes(newTimes);
        }

        return newIndex;
      });
    }
  };

  // Navigate to previous question
  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      // Record time spent on current question
      recordQuestionTime();

      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  // Navigate to specific question by index
  const goToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      // Record time spent on current question
      recordQuestionTime();

      setCurrentQuestionIndex(index);

      // Set start time for the question if it hasn't been visited yet
      if (questionStartTimes[index] === null) {
        const newTimes = [...questionStartTimes];
        newTimes[index] = Date.now();
        setQuestionStartTimes(newTimes);
      }
    }
  };

  // Record time spent on the current question
  const recordQuestionTime = () => {
    const currentTime = Date.now();
    const startTime = questionStartTimes[currentQuestionIndex];

    if (startTime) {
      const newTimes = [...questionStartTimes];
      // Update start time to current time (for if we come back to this question)
      newTimes[currentQuestionIndex] = currentTime;
      setQuestionStartTimes(newTimes);
    }
  };

  // Handle quiz submission
  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Record time for the last question
    recordQuestionTime();

    // Calculate score
    let score = 0;
    const questionWiseScore = [];

    questions.forEach((question, index) => {
      const isCorrect = selectedAnswers[index] === question.correctAnswerIndex;
      questionWiseScore.push(isCorrect ? 1 : 0);
      if (isCorrect) score++;
    });

    // Calculate time taken for each question in seconds
    const questionWiseTimeTaken = [];
    let totalTimeInSeconds = 0;

    // If the quiz ended due to time up, use the full 25 minutes
    if (!timer.isRunning && timer.timeRemaining === 0) {
      totalTimeInSeconds = 25 * 60;

      // Distribute time evenly among answered questions
      const answeredQuestions = selectedAnswers.filter(answer => answer !== null).length;
      const timePerQuestion = totalTimeInSeconds / (answeredQuestions || 1);

      selectedAnswers.forEach(answer => {
        questionWiseTimeTaken.push(answer !== null ? timePerQuestion.toFixed(1) : 0);
      });
    } else {
      // Calculate time based on the timer
      totalTimeInSeconds = (25 * 60) - timer.timeRemaining;

      // For now, distribute time evenly (we don't have exact times per question)
      const timePerQuestion = totalTimeInSeconds / questions.length;
      questions.forEach(() => {
        questionWiseTimeTaken.push(timePerQuestion.toFixed(1));
      });
    }

    // Update current session
    currentSession.score = score;
    currentSession.timeTakenInMinutes = totalTimeInSeconds / 60;
    currentSession.questionWiseScore = questionWiseScore;
    currentSession.questionWiseTimeTaken = questionWiseTimeTaken;

    // Save to leaderboard in localStorage
    try {
      const existingData = localStorage.getItem('quizLeaderboard');
      const leaderboard = existingData ? JSON.parse(existingData) : [];

      leaderboard.push({...currentSession});
      localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
    } catch (error) {
      console.error('Error saving to leaderboard:', error);
    }

    // Call the onQuizComplete callback
    if (onQuizComplete) {
      onQuizComplete();
    }
  };

  // If no questions are loaded yet
  if (questions.length === 0) {
    return <div className="text-center p-5">Loading quiz questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container container py-4 bg-dark text-white">
      <div className="row">
        <div className="col-md-8">
          <div className="card bg-dark text-white mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4>Question {currentQuestionIndex + 1} of {questions.length}</h4>
              <timer.TimerDisplay />
            </div>
            <div className="card-body">
              <h5 className="card-title mb-4">{currentQuestion.question}</h5>
              <div className="options-list">
                {currentQuestion.options.map((option, index) => (
                  <div className="form-check mb-3" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      id={`option-${index}`}
                      checked={selectedAnswers[currentQuestionIndex] === index}
                      onChange={() => handleOptionSelect(index)}
                    />
                    <label className="form-check-label" htmlFor={`option-${index}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button 
                className="btn btn-secondary" 
                onClick={goToPrevQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              {currentQuestionIndex < questions.length - 1 ? (
                <button 
                  className="btn btn-primary" 
                  onClick={goToNextQuestion}
                >
                  Next
                </button>
              ) : (
                <button 
                  className="btn btn-success" 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-white">
            <div className="card-header">
              <h5>Question Navigator</h5>
            </div>
            <div className="card-body">
              <div className="question-grid">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={`btn ${
                      index === currentQuestionIndex 
                        ? 'btn-primary' 
                        : selectedAnswers[index] !== null 
                          ? 'btn-success' 
                          : 'btn-outline-secondary'
                    } m-1`}
                    onClick={() => goToQuestion(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="btn btn-sm btn-success me-2" style={{ pointerEvents: 'none' }}></div>
                  <span>Answered</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="btn btn-sm btn-outline-secondary me-2" style={{ pointerEvents: 'none' }}></div>
                  <span>Unanswered</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn btn-sm btn-primary me-2" style={{ pointerEvents: 'none' }}></div>
                  <span>Current</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-danger w-100" 
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Finish Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;
