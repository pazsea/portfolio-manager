import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background: #efe2ba;
  width: 30%;
  /* z-index: 60; */
  /* border: 1px solid red; */
  font-style: bold;
  list-style: none;
  margin: 1% auto;
  justify-content: space-between;
  background: #6290c3;

  li {
    a {
      padding: 0;
      margin: 0;
      text-decoration: none;
      color: white;
      border: 1px solid white;
      padding: 0.3em;
      font-size: 20px;

      :hover {
        background: white;
        color: black;
      }
      button {
        color: white;
        background: none;
        border: none;
        padding-bottom: 0 !important;
        font: inherit;
        cursor: pointer;
        :hover {
          color: red;
        }
      }
    }
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    /* justify-content: flex-end; */
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (max-width: 1230px) {
    width: 100%;
    justify-content: space-evenly;
    li {
      a {
        margin: 4% auto;
        font-size: 16px;
      }
    }
  }
`;
