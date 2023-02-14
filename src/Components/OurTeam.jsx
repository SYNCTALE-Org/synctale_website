import "./OurTeam.scss";
import OTP1 from "../media/21.png";
import OTP2 from "../media/20.png";
import OTP3 from "../media/19.png";
import OTP4 from "../media/22.png";
import Facebook from "../media/facebook.svg";
import Instagram from "../media/instagram.svg";
import Twitter from "../media/twitter.svg";
import Linkedin from "../media/linkedin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function OurTeam() {
  return (
    <div class="container-our-team" id="ourteam">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={OTP1} />
            </div>
            <h3 class="title">Haidar al Emir</h3>
            <span class="post">Tech Lead</span>
            <br />
            <ul class="social">
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={OTP2} />
            </div>
            <h3 class="title">Liliane Jaafar </h3>
            <span class="post">Graphic Designer</span>
            <br />
            <ul class="social">
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={OTP3} />
            </div>
            <h3 class="title">Dani Abdelkhalek</h3>
            <span class="post">Vidiographer</span>
            <br />
            <ul class="social">
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="our-team">
            <div class="pic">
              <img src={OTP4} />
            </div>
            <h3 class="title">Maida Aboulhosn</h3>
            <span class="post">
              Digital Media & Digital Transformation
              <br /> Consultant and Training
            </span>
            <ul class="social">
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
