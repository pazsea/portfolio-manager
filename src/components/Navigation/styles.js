import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: absolute;
  font-size: 2rem;
  background: #efe2ba;
  width: 100%;
  /* z-index: 60; */
  font-family: "Amatic SC", cursive;
  font-style: bold;

  top: ${props => (props.navOpen ? "65px" : "-350px")};
  list-style: none;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: top 0.3s ease-out;

  li {
    padding: 0.1em;
    a {
      display: inline-block;
      width: 6em;
      text-align: center;
      text-decoration: none;
      border: 2px solid black;
      padding: 0.1em 0 0.3em 0;

      -moz-box-shadow: 0px 1px 0px -2px #1c1b18;
      -webkit-box-shadow: 0px 1px 0px -2px #1c1b18;
      box-shadow: 0px 1px 0px -2px #1c1b18;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0.05, #eae0c2),
        color-stop(1, #ccc2a6)
      );

      -moz-border-radius: 8px;
      -webkit-border-radius: 8px;
      border-radius: 8px;
      border: 2px solid #333029;
      display: inline-block;
      cursor: pointer;
      color: #505739;
      font-weight: bold;
      :hover {
        color: #fffff0;
        text-decoration-line: underline;
      }
    }
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    top: 0;
    transform: 0;
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
  position: relative;

    flex-direction: row;
    background: none;
    li {
      a {
        border: none;
        background: none;
        color: black;
        margin: 0 0.8em;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
        width: 3.5em;
      }
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    justify-content: flex-end;
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }
`;
