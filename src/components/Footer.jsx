import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import logo from "../assets/logo.png"
import st from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={st.footer}>
      <div className={st.footerContent}>
        <div className={st.footerLogo}>
          <img src={logo} alt="Quiz Website Logo" className={st.logo} />
          <h3>Quiz Master</h3>
        </div>

        <div className={st.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quizzes</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className={st.footerSocial}>
          <h4>Follow Us</h4>
          <div className={st.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className={st.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Quiz Master. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer;
