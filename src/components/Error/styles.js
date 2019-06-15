import styled from "styled-components";

export const ErrorDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    margin: 5% 0;
    width: 20%;
    height: 50%;
  }

  @media (max-width: 1024px) {
    img {
      width: 40%;
      height: 60%;
    }
  }
`;
