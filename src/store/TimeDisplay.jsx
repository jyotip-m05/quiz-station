import { useState, useEffect } from 'react';

const TimeDisplay = ({ initialTimeInMinutes = 25, onTimeUp }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTimeInMinutes * 60); // Convert to seconds
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    
    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prevTime => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            clearInterval(timer);
            setIsRunning(false);
            if (onTimeUp) onTimeUp();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeRemaining, onTimeUp]);

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setTimeRemaining(initialTimeInMinutes * 60);
    setIsRunning(true);
  };

  // Calculate minutes and seconds for display
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Format time as MM:SS
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Calculate percentage of time remaining for progress bar
  const timePercentage = (timeRemaining / (initialTimeInMinutes * 60)) * 100;

  // Determine progress bar color based on time remaining
  let progressColor = 'success';
  if (timePercentage < 50) progressColor = 'warning';
  if (timePercentage < 25) progressColor = 'danger';

  return {
    timeRemaining,
    formattedTime,
    isRunning,
    pauseTimer,
    resumeTimer,
    resetTimer,
    timePercentage,
    progressColor,
    // Component for displaying the timer
    TimerDisplay: () => (
      <div className="timer-container">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-bold">Time Remaining:</span>
          <span className={`badge bg-${progressColor}`}>{formattedTime}</span>
        </div>
        <div className="progress" style={{ height: '10px' }}>
          <div 
            className={`progress-bar bg-${progressColor}`} 
            role="progressbar" 
            style={{ width: `${timePercentage}%` }} 
            aria-valuenow={timePercentage} 
            aria-valuemin="0" 
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    )
  };
};

export default TimeDisplay;