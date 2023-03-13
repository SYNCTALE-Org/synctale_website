import "./Hero.scss";
import Banner from "../media/Hero-Banner.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function Hero() {
  return (
    <div className="containerHome" id="home">
      <div className="text-area">
        <p className="hero-text">
          To be the leading provider of top-quality and professional customized
          digital products tailored to your needs
        </p>
        <button className="button">
          <a className="icon-send">
            <FontAwesomeIcon
              className="send_icon"
              icon={faPaperPlane}
            ></FontAwesomeIcon>
          </a>

          <div className="text"> Let's Connect</div>
        </button>
      </div>
      <img className="Banner" src={Banner} alt="" />
      <div className="break"></div>
    </div>
  );
}

export default Hero;
