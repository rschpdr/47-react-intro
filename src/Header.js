import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li id="dropdown-menu-button">
            <Dropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
