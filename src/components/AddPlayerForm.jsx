import st from './AddPlayerForm.module.css'
import { useState, useEffect } from 'react'
import { quizzes, currentSession } from '../store/Storage.jsx'
import Leaderboard from './Leaderboard.jsx'

const AddPlayerForm = ({ onStartQuiz }) => {
  const [playerName, setPlayerName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(playerName.trim() !== '' && difficulty !== '');
  }, [playerName, difficulty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Store player information in currentSession
    currentSession.name = playerName;
    currentSession.difficulty = difficulty;
    currentSession.score = 0;
    currentSession.timeTakenInMinutes = 0;
    currentSession.questionWiseScore = [];
    currentSession.questionWiseTimeTaken = [];

    // Call the onStartQuiz function to start the quiz
    onStartQuiz();
  };

  return <>
    <div className={st['form-dark']} id="form">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-dark text-white">
              <div className="card-header text-center">
                <h3>Start Your Quiz</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="playerName" className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="playerName" 
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="difficulty" className="form-label">Difficulty Level</label>
                    <select 
                      className="form-select" 
                      id="difficulty"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select difficulty</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={!isFormValid}
                    >
                      Start Quiz
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <Leaderboard />
      </div>
    </div>
  </>
}
export default AddPlayerForm;
