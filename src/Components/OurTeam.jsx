import "./OurTeam.scss";
import OTP1 from "../media/JadK.jpeg";
import OTP2 from "../media/20.png";
import OTP3 from "../media/19.png";
import OTP4 from "../media/22.png";
import OTP5 from "../media/omarpfp.jpeg";
import OTP6 from "../media/mohammad.jpeg";
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
    <div className="container-our-team" id="ourteam">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={OTP4} />
            </div>
            <h3 className="title">Maida Aboulhosn</h3>
            <span className="post">Managing Director</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={OTP6} />
            </div>
            <h3 className="title">Mohammad Chreif</h3>
            <span className="post">Fullstack Web Dev</span>
            <br />
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={OTP5} />
            </div>
            <h3 className="title">Omar Badr </h3>
            <span className="post">UX/UI designer</span>
            <br />
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={OTP2} />
            </div>
            <h3 className="title">Liliane Jaafar </h3>
            <span className="post">Graphic Designer</span>
            <br />
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={OTP3} />
            </div>
            <h3 className="title">Dani Abdelkhalek</h3>
            <span className="post">Vidiographer</span>
            <br />
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={OTP1} />
            </div>
            <h3 className="title">Jad K.</h3>
            <span className="post">Tech Lead</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
