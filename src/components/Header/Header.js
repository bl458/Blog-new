import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <Link className="header__link" to="/">
        Michael Lim
      </Link>
      <Link className="header__link" to="posts/edit">
        Write
      </Link>
    </nav>
  );
};

export default Header;
