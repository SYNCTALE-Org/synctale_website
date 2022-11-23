import "./Navbar.css";
import Logo from "../media/Logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <a href="">
        <li>
          <img src={Logo} className="logo" />
        </li>
      </a>
      <a href="">
        <li>Home</li>
      </a>
      <a href="">
        <li>About</li>
      </a>
      <a href="">
        <li>Our Team</li>
      </a>
      <a href="">
        {" "}
        <li>News</li>
      </a>
    </div>
  );
}

export default Navbar;
