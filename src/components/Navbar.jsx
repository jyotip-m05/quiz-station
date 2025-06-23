import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.png'

const Navbar = ({ onNavigate, currentView }) => {
  // Handle navigation click
  const handleNavClick = (view, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{position: "fixed", top: "0", width: "100%", zIndex: 200}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={(e) => handleNavClick('home', e)}>
          <img src={logo} alt="logo" height="40px"/>
          Quiz Station
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className={`nav-link ${currentView === 'home' ? 'active' : ''}`} 
                aria-current="page" 
                href="#" 
                onClick={(e) => handleNavClick('home', e)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentView === 'results' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => handleNavClick('results', e)}
              >
                Scores
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentView === 'about' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => handleNavClick('about', e)}
              >
                About
              </a>
            </li>
          </ul>
          <div className="d-flex">
            {currentView !== 'quiz' && (
              <a 
                className="btn btn-outline-success" 
                href="#form" 
                onClick={(e) => {
                  if (currentView !== 'home') {
                    e.preventDefault();
                    handleNavClick('home', e);
                  }
                }}
              >
                Start Quiz
              </a>
            )}
            <div className="form-check form-switch" style={{marginLeft: "10px", marginTop: "7px"}}>
              <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/* Add spacing to prevent content from being hidden behind the fixed navbar */}
    <div style={{ height: "56px" }}></div>
  </>
}
export default Navbar;
