import image from "../assets/hero_img.png";
import st from "./HeroSection.module.css";

const HeroSection = () => {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <>
    <div className={`${st['hero-dark']}`}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 order-lg-2">
            <img src={image} className="d-block mx-lg-auto img-fluid" alt="image" width="300" loading="lazy"/>
          </div>
          <div className={`col-lg-6 ${st.dark}`}>
            <h1 className="display-5 fw-bold lh-1 mb-3">Quiz</h1>
            <h1 className="display-5 fw-bold lh-1 mb-3">Station</h1>
            <p className="lead">
              Challenge your brain with thousands of questions across every topic imaginable. Whether you want to test your
              knowledge, discover new facts, or just have some fun, you'll find the perfect quiz here.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a 
                href="#form" 
                onClick={scrollToForm}
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Start Quiz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default HeroSection;
