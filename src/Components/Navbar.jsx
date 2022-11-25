import "./Navbar.scss";
import Logo from "../media/Logo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar">
      <a className href="">
        <div className="logo-container">
          <li>
            <img src={Logo} className="logo" />{" "}
          </li>
          <a className="mail">SyncTale@gmail.com</a>
        </div>
      </a>
      <a className="section" href="">
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link>
      </a>
      <a className="section" href="">
        <Link to="ourteam" spy={true} smooth={true} offset={50} duration={500}>
          Our Team
        </Link>
      </a>
      <a className="section" href="">
        <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
          Services
        </Link>
      </a>
      <a href="" className="hamburger">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </a>
    </div>
  );
}

export default Navbar;
