import "./Navbar.scss";
import Logo from "../media/Logo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="NavigationBar">
      <div className="navbar">
        <a className="Logo-Area">
          <div className="logo-container">
            <li>
              <img src={Logo} className="logo" />{" "}
            </li>
            <a className="mail">hello@synctale.com</a>
          </div>
        </a>

        <a className="section">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </a>
        <a className="section">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Services
          </Link>
        </a>
        <a className="section">
          <Link
            to="ourteam"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Our Team
          </Link>
        </a>
        <a className="section">
          <Link
            to="ourWork"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Our Work
          </Link>
        </a>
        <a className="section">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact Us
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
