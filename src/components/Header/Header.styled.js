import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 35px 20px;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: white;
  font-size: inherit;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;
