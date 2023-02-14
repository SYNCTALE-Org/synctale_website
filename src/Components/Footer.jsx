import {
  faGooglePlus,
  faLinkedin,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";
import Logo from "../media/Logo.png";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-content">
          <img className="logo-footer" src={Logo} alt="" />
          <p>
            To be the leading provider of top-quality and professional
            customized digital products tailored to your needs
          </p>
          <ul className="socials">
            <li>
              <div className="social-footer">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </li>
            <li>
              <div className="social-footer">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </li>
            <li>
              <div className="social-footer">
                <a href="#">
                  <FontAwesomeIcon icon={faGooglePlus} />
                </a>
              </div>
            </li>
            <li>
              <div className="social-footer">
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </li>
            <li>
              <div className="social-footer">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Powered By &copy; <a href="#">Sync Tale</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
