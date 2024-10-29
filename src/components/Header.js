import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={Logo}></img>
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
