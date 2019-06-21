import React from "react";
import { css } from "@emotion/core";
import { PropagateLoader } from "react-spinners";
import { LoadingDiv } from "./styles";

const override = css`
  display: flex;
  margin: 30vh auto;
  border-color: red;
`;

export default function Loading(props) {
  return (
    <LoadingDiv>
      <PropagateLoader
        css={override}
        color={"#4056A1"}
        loading={props.loading}
      />
    </LoadingDiv>
  );
}
