import styled from "styled-components";

export const InfoTable = styled.table`
  width: 100%;
  th {
    text-align: left;
  }
  img {
    width: 100px;
  }

  @media (max-width: 600px) {
    tbody {
      tr {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const PortfolioDiv = styled.div`
  display: flex;
  margin: 5% auto;
  width: 70%;
  padding: 1%;
  background: #e6e1c5;
  border-radius: 10px;

  .graph {
    flex: 1;
    margin-right: 1%;
    /* border: 1px solid green; */
  }
  .wrapper {
    background: #f1ffe7;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1% 1% 0.5% 1%;
    /* border: 1px solid green; */
    .info {
      flex: 5;
      margin-bottom: 4%;
      font-family: "Open Sans", sans-serif;
      h2 {
        margin-bottom: 1%;
        font-family: "Oswald", sans-serif;
      }
    }
    a {
      flex: 1;
    }
    button {
      width: 100%;

      color: white;
      font-size: 18px;
      background: black;
      padding: 1%;
      border: 1px solid white;
      :hover {
        background: white;
        border: 1px solid black;
        color: black;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1550px) {
    flex-direction: column;
    .wrapper {
      width: 99%;
      margin-top: 2%;
    }
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const DetailDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5% auto;
  width: 70%;
  padding: 1%;
  background: #e6e1c5;
  border-radius: 10px;

  .graph {
    flex: 1 1 45%;
    margin-right: 1%;
    /* border: 1px solid green; */
  }

  .wrapper {
    background: #f1ffe7;
    display: flex;
    flex-direction: column;
    flex: 1 1 45%;
    padding: 1% 1% 0.5% 1%;
    /* border: 1px solid green; */
    .info {
      flex: 5;
      margin-bottom: 4%;
      font-family: "Open Sans", sans-serif;
      h2 {
        margin-bottom: 1%;
        font-family: "Oswald", sans-serif;
      }
    }
    a {
      flex: 1;
    }
    button {
      width: 100%;

      color: white;
      font-size: 18px;
      background: black;
      padding: 1%;
      border: 1px solid white;
      :hover {
        background: white;
        border: 1px solid black;
        color: black;
        cursor: pointer;
      }
    }
  }
  .companyDetails {
    flex: 1 1 50%;
    /* border: 10px solid red; */
    .desc {
      font-style: italic;

      margin: 2% 0;
      padding: 0 1%;
      font-size: 1.7em;
    }
    ul {
      display: flex;
      list-style: none;
      font-size: 1.5em;
      justify-content: space-between;
    }
  }

  @media (max-width: 1550px) {
    flex-direction: column;
    .wrapper {
      width: 99%;
      margin-top: 2%;
    }
  }

  @media (max-width: 600px) {
    width: 95%;

  }
`;
