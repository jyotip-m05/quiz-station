import { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    // Load leaderboard data from localStorage
    const loadLeaderboard = () => {
      try {
        const storedData = localStorage.getItem('quizLeaderboard');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          // Sort by score (highest first) and then by time (lowest first)
          const sortedData = parsedData.sort((a, b) => {
            if (b.score !== a.score) {
              return b.score - a.score;
            }
            return a.timeTakenInMinutes - b.timeTakenInMinutes;
          });
          setLeaderboardData(sortedData);
        }
      } catch (error) {
        console.error('Error loading leaderboard data:', error);
        setLeaderboardData([]);
      }
    };

    loadLeaderboard();
  }, []);

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Function to get badge color based on score percentage
  const getBadgeColor = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'primary';
    if (percentage >= 40) return 'warning';
    return 'danger';
  };

  if (leaderboardData.length === 0) {
    return (
      <div className="card bg-dark text-white">
        <div className="card-header">
          <h3>Leaderboard</h3>
        </div>
        <div className="card-body text-center">
          <p>No quiz results yet. Be the first to complete a quiz!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-dark text-white">
      <div className="card-header">
        <h3>Leaderboard</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Difficulty</th>
                <th>Score</th>
                <th>Time (min)</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => {
                const totalQuestions = entry.questionWiseScore.length;
                return (
                  <>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{entry.name}</td>
                      <td>
                        <span className={`badge bg-${entry.difficulty === 'easy' ? 'success' : entry.difficulty === 'medium' ? 'warning' : 'danger'}`}>
                          {entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)}
                        </span>
                      </td>
                      <td>
                        <span className={`badge bg-${getBadgeColor(entry.score, totalQuestions)}`}>
                          {entry.score}/{totalQuestions}
                        </span>
                      </td>
                      <td>{entry.timeTakenInMinutes.toFixed(2)}</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-outline-info" 
                          onClick={() => toggleDetails(index)}
                        >
                          {expandedId === index ? 'Hide' : 'Show'}
                        </button>
                      </td>
                    </tr>
                    {expandedId === index && (
                      <tr>
                        <td colSpan="6">
                          <div className="p-3">
                            <h5>Question Details</h5>
                            <div className="table-responsive">
                              <table className="table table-sm table-dark">
                                <thead>
                                  <tr>
                                    <th>Q#</th>
                                    <th>Result</th>
                                    <th>Time (sec)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {entry.questionWiseScore.map((score, qIndex) => (
                                    <tr key={qIndex}>
                                      <td>{qIndex + 1}</td>
                                      <td>
                                        <span className={`badge bg-${score ? 'success' : 'danger'}`}>
                                          {score ? 'Correct' : 'Incorrect'}
                                        </span>
                                      </td>
                                      <td>{entry.questionWiseTimeTaken[qIndex]}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;