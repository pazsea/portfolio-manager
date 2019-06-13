import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4% auto;
  width: 80%;
  display: flex;
  border: 1px solid black;
  padding: 1%;
  background: #e6e1c5;
  border-radius: 10px;
  ul {
    list-style: none;
    margin: 2% 0;
    width: fit-content;
    padding: 1% 2%;
    background: #36393b;
    color: white;
    border-radius: 10px;

    li {
      font-style: italic;
      margin: 2% 0;
    }
  }

  h1 {
    font-family: "Open Sans", sans-serif;
  }
  .imageDiv {
    flex: 1;
    
    img {
      height: 100%;
      width: 100%;
      padding: 5%;
    }
  }

  .userInfo {
    flex: 1;

    .desc {
      font-style: bold;
      h3 {
        padding: 2% 0;
      }
    }
  }
`;
