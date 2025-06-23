import { useState, useEffect } from 'react';
import { quizzes, currentSession } from '../store/Storage.jsx';
import Leaderboard from './Leaderboard.jsx';

const ScoreSummary = ({ onPlayAgain }) => {
  const [quizData, setQuizData] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Get quiz data from currentSession
    setQuizData({
      name: currentSession.name,
      difficulty: currentSession.difficulty,
      score: currentSession.score,
      timeTakenInMinutes: currentSession.timeTakenInMinutes,
      questionWiseScore: currentSession.questionWiseScore,
      questionWiseTimeTaken: currentSession.questionWiseTimeTaken
    });

    // Get questions from the quiz
    if (currentSession.difficulty) {
      setQuestions(quizzes[currentSession.difficulty] || []);
    }
  }, []);

  if (!quizData) {
    return <div className="text-center p-5">Loading results...</div>;
  }

  // Calculate percentage score
  const totalQuestions = questions.length;
  const scorePercentage = totalQuestions > 0 ? (quizData.score / totalQuestions) * 100 : 0;

  // Get motivational message based on score
  const getMotivationalMessage = () => {
    if (scorePercentage >= 90) return "Quiz Champion! Absolutely brilliant performance!";
    if (scorePercentage >= 80) return "Outstanding! You really know your stuff!";
    if (scorePercentage >= 70) return "Great job! You've got solid knowledge!";
    if (scorePercentage >= 60) return "Good effort! Keep learning and you'll master this!";
    if (scorePercentage >= 50) return "Not bad! You're on the right track!";
    if (scorePercentage >= 40) return "You're making progress! Keep studying!";
    if (scorePercentage >= 30) return "More caffeine, maybe? Don't give up!";
    if (scorePercentage >= 20) return "It's a learning journey! Try again soon!";
    return "Everyone starts somewhere! Keep practicing!";
  };

  // Get badge color based on score percentage
  const getBadgeColor = () => {
    if (scorePercentage >= 80) return 'success';
    if (scorePercentage >= 60) return 'primary';
    if (scorePercentage >= 40) return 'warning';
    return 'danger';
  };

  return (
    <div className="score-summary container py-5 bg-dark text-white">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card bg-dark text-white mb-4">
            <div className="card-header text-center">
              <h2>Quiz Results</h2>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <h3>
                  <span className={`badge bg-${getBadgeColor()}`}>
                    {quizData.score} / {totalQuestions} ({scorePercentage.toFixed(1)}%)
                  </span>
                </h3>
                <p className="lead mt-3">{getMotivationalMessage()}</p>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="card bg-dark border-secondary mb-3">
                    <div className="card-header">Player Info</div>
                    <div className="card-body">
                      <p><strong>Name:</strong> {quizData.name}</p>
                      <p>
                        <strong>Difficulty:</strong> 
                        <span className={`badge ms-2 bg-${quizData.difficulty === 'easy' ? 'success' : quizData.difficulty === 'medium' ? 'warning' : 'danger'}`}>
                          {quizData.difficulty.charAt(0).toUpperCase() + quizData.difficulty.slice(1)}
                        </span>
                      </p>
                      <p><strong>Time Taken:</strong> {quizData.timeTakenInMinutes.toFixed(2)} minutes</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card bg-dark border-secondary">
                    <div className="card-header">Performance Summary</div>
                    <div className="card-body">
                      <p><strong>Correct Answers:</strong> {quizData.score}</p>
                      <p><strong>Incorrect Answers:</strong> {totalQuestions - quizData.score}</p>
                      <p><strong>Accuracy:</strong> {scorePercentage.toFixed(1)}%</p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="mb-3">Question Details</h4>
              <div className="table-responsive">
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Question</th>
                      <th>Your Answer</th>
                      <th>Correct Answer</th>
                      <th>Result</th>
                      <th>Time (sec)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((question, index) => {
                      const userAnswerIndex = currentSession.questionWiseScore[index] === 1 
                        ? question.correctAnswerIndex 
                        : (currentSession.questionWiseScore[index] === 0 ? index : null);

                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{question.question}</td>
                          <td>
                            {userAnswerIndex !== null 
                              ? question.options[userAnswerIndex] 
                              : <span className="text-muted">Not answered</span>}
                          </td>
                          <td>{question.options[question.correctAnswerIndex]}</td>
                          <td>
                            <span className={`badge bg-${quizData.questionWiseScore[index] ? 'success' : 'danger'}`}>
                              {quizData.questionWiseScore[index] ? 'Correct' : 'Incorrect'}
                            </span>
                          </td>
                          <td>{quizData.questionWiseTimeTaken[index]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer text-center">
              <button 
                className="btn btn-primary btn-lg" 
                onClick={onPlayAgain}
              >
                Play Again
              </button>
            </div>
          </div>

          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
