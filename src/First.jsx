import HeroSection from "./components/HeroSection.jsx";
import Footer from "./components/Footer.jsx";
import AddPlayerForm from "./components/AddPlayerForm.jsx";

const First = ({ onStartQuiz }) => {
  return <>
    <HeroSection />
    <AddPlayerForm onStartQuiz={onStartQuiz} />
    <Footer />
  </>
}
export default First;
