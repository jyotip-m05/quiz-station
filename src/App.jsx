import { useState } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar.jsx";
import First from "./First.jsx";
import QuizEngine from "./components/QuizEngine.jsx";
import ScoreSummary from "./components/ScoreSummary.jsx";
import AboutPage from "./components/AboutPage.jsx";
import { resetCurrentSession } from "./store/Storage.jsx";
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const handleNavigation = (view) => {
    setCurrentView(view);
  };
  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };
  const handleQuizComplete = () => {
    setCurrentView('results');
  };
  const handlePlayAgain = () => {
    resetCurrentSession();
    setCurrentView('home');
  };
  const renderView = () => {
    switch (currentView) {
      case 'quiz':
        return <QuizEngine onQuizComplete={handleQuizComplete} />;
      case 'results':
        return <ScoreSummary onPlayAgain={handlePlayAgain} />;
      case 'about':
        return <AboutPage />;
      case 'home':
      default:
        return <First onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <>
      <Navbar onNavigate={handleNavigation} currentView={currentView} />
      {renderView()}
    </>
  );
}

export default App;
