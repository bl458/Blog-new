import { Link, useLocation } from "react-router-dom";
import { isPostsPath } from "../../helper/miscHelper";

import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  const getRightLink = () => {
    if (isPostsPath(pathname)) {
      return "Edit";
    } else if (pathname === "/posts/edit") {
      return "";
    } else {
      return "Write";
    }
  };

  return (
    <nav className="header">
      <Link className="header__link" to="/">
        Michael Lim
      </Link>
      <Link
        className="header__link"
        to="/posts/edit"
        state={{ prevPath: pathname }}
      >
        {getRightLink()}
      </Link>
    </nav>
  );
};

export default Header;
