import { StyledHeader, Link } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">Michael Lim</Link>
      <Link href="posts/edit">Write</Link>
    </StyledHeader>
  );
};

export default Header;
