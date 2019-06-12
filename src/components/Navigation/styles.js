import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  font-size: 1rem;
  background: #efe2ba;
  width: 70%;
  /* z-index: 60; */
  font-style: bold;
  list-style: none;
  margin: 1% auto;
  justify-content: space-around;
  background: #6290C3;


  li {
    a {
      -moz-box-shadow: inset 0px 1px 2px -50px #a6827e;
      -webkit-box-shadow: inset 0px 1px 2px -50px #a6827e;
      box-shadow: inset 0px 1px 2px -50px #a6827e;
      background-color: #c79d73;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      padding: 0.6em;
      text-decoration: none;
      text-shadow: 0px 1px 0px #4d3534;

      :hover {
        background-color: #634b30;
      }
      :active {
        position: relative;
        top: 1px;
      }
    }
    button {
      -moz-box-shadow: inset 0px 1px 2px -50px #a6827e;
      -webkit-box-shadow: inset 0px 1px 2px -50px #a6827e;
      box-shadow: inset 0px 1px 2px -50px #a6827e;
      background-color: #c79d73;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      padding: 0.6em;
      text-decoration: none;
      text-shadow: 0px 1px 0px #4d3534;
      border: none;

      :hover {
        background-color: #634b30;
      }
      :active {
        position: relative;
        top: 1px;
      }
      i {
        color: darkred;
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
  @media (min-width: 1200px) {
  }
`;
