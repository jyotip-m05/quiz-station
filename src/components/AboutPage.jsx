import React from 'react';
import Footer from './Footer.jsx';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card bg-dark text-white mb-4">
              <div className="card-header text-center">
                <h2>About Quiz Station</h2>
              </div>
              <div className="card-body">
                <h4 className="mb-3">Welcome to Quiz Station!</h4>
                <p className="lead">
                  Quiz Station is an interactive quiz platform designed to test your knowledge across various difficulty levels.
                  Whether you're a beginner looking to learn or an expert seeking a challenge, our quizzes offer something for everyone.
                </p>
                
                <h4 className="mt-4 mb-3">Features</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card bg-dark border-secondary h-100">
                      <div className="card-header">
                        <h5>Multiple Difficulty Levels</h5>
                      </div>
                      <div className="card-body">
                        <p>Choose from three difficulty levels: Easy, Medium, and Hard. Each level offers a unique set of questions to match your expertise.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card bg-dark border-secondary h-100">
                      <div className="card-header">
                        <h5>Timed Quizzes</h5>
                      </div>
                      <div className="card-body">
                        <p>Test your knowledge under pressure with our 25-minute timer. Can you answer all questions before time runs out?</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card bg-dark border-secondary h-100">
                      <div className="card-header">
                        <h5>Detailed Results</h5>
                      </div>
                      <div className="card-body">
                        <p>Get comprehensive feedback on your performance, including question-by-question analysis and time spent on each question.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card bg-dark border-secondary h-100">
                      <div className="card-header">
                        <h5>Leaderboard</h5>
                      </div>
                      <div className="card-body">
                        <p>Compare your scores with other players on our leaderboard. Can you claim the top spot?</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h4 className="mt-4 mb-3">How to Play</h4>
                <ol className="list-group list-group-numbered mb-4">
                  <li className="list-group-item bg-dark text-white border-secondary">Enter your name and select a difficulty level</li>
                  <li className="list-group-item bg-dark text-white border-secondary">Click "Start Quiz" to begin</li>
                  <li className="list-group-item bg-dark text-white border-secondary">Answer questions by selecting the correct option</li>
                  <li className="list-group-item bg-dark text-white border-secondary">Use the navigation panel to move between questions</li>
                  <li className="list-group-item bg-dark text-white border-secondary">Submit your quiz when finished or wait for the timer to end</li>
                  <li className="list-group-item bg-dark text-white border-secondary">Review your results and see how you compare on the leaderboard</li>
                </ol>
                
                <h4 className="mt-4 mb-3">About the Developers</h4>
                <p>
                  Quiz Station was developed as a project to demonstrate React skills and create an engaging, interactive learning experience.
                  We're constantly working to improve the platform and add new features.
                </p>
                <p>
                  If you have any feedback or suggestions, please feel free to reach out to us through the contact information provided in the footer.
                </p>
              </div>
              <div className="card-footer text-center">
                <a href="/" className="btn btn-primary">Back to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;