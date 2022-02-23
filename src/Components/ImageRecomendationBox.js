import * as React from "react";
import styled from "styled-components";
// MUI
import Box from "@mui/material/Box";
import AddButton from "./AddButton";
import Loader from "./Loader";

const StyledBox = styled(Box)`
  background-color: #d9dddf;
  height: 50vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: auto;
  cursor: pointer;
`;
const LoaderWrapper = styled.div`
  margin: auto;
`;

export default function ImageRecomendationBox({
  photo,
  loadPhotos,
  isLoading,
}) {
  return (
    <StyledBox onClick={loadPhotos}>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : photo ? (
        <img width={"100%"} src={photo} />
      ) : (
        <AddButton />
      )}
    </StyledBox>
  );
}
