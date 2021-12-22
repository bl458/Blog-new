import styled from "styled-components";

export const Flexbox = styled.div`
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    flex-direction: column;
    text-align: center;
  }
`;
