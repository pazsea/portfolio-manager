import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  width: 40%;
  padding: 2%;
  border: 2px solid grey;
  border-radius: 10px;
  background: #ffd3bf;
  overflow: hidden;

  label {
    font-size: 20px;
    color: black;
    margin-bottom: 2%;
    font-family: Arial;
    font-style: bold;
  }
  input {
    margin-bottom: 5%;
    padding: 2%;
    :focus {
      border-color: lightblue;
    }
  }
  button {
    -moz-box-shadow: inset 0px 1px 0px 0px #ffffff;
    -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;
    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.05, #f9f9f9),
      color-stop(1, #e9e9e9)
    );
    background: -moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
    background: -webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
    background: -o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
    background: -ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
    background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);
    background-color: #f9f9f9;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    margin: 3% 0 0 0;
    display: inline-block;
    cursor: pointer;
    color: #666666;
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;
  }
  button:hover {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.05, #e9e9e9),
      color-stop(1, #f9f9f9)
    );
    background: -moz-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
    background: -webkit-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
    background: -o-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
    background: -ms-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
    background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='#f9f9f9',GradientType=0);
    background-color: #e9e9e9;
  }
  button:active {
    position: relative;
    top: 1px;
  }
  p {
    margin-top: 5%;
    color: red;
    text-align: center;
  }

  @media (max-width: 500px) {
    width: 85%;
    margin: 40% auto;
  }
`;
