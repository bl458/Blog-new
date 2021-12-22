import styled from "styled-components";

export const StyledFeed = styled.div`
  display: flex;
`;

export const FeedItem = styled.div`
  display: flex;
`;

export const About = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 0 30px;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    display: none;
  }
`;
