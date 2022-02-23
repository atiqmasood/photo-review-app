import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// Core
import ApprovedImagesTab from "./Components/ApprovedImagesTab";
import ImageRecomendationBox from "./Components/ImageRecomendationBox";
import ButtonBar from "./Components/ButtonBar";
import {
  loadPhotosAction,
  approvePhotoAction,
} from "./Store/Photos/PhotosActions";

const Wrapper = styled(Container)`
  margin-top: 2rem;
  tex
`;
const Title = styled.h3`
  color: #2196f3;
  text-align: center;
`;
const StyledBox = styled(Box)`
  background-color: #fff;
  padding: 1rem;
  width: 38%;
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const FooterText = styled.div`
  text-align: center;
  color: #727878;
  margin: 1rem;
`;

function App({
  loadPhotosAction,
  photo,
  isLoading,
  approvePhotoAction,
  approvedPhotos,
}) {
  const url = photo?.links?.download;

  // load photo
  function loadPhotos() {
    loadPhotosAction();
  }
  // approve photo
  function onApprove() {
    loadPhotos();
    approvePhotoAction({ id: photo?.id, url });
  }
  // reject photo
  function onReject() {
    loadPhotos();
  }

  return (
    <Wrapper>
      <Title>IMAGE APPROVAL APPLICATION</Title>
      <BoxWrapper>
        <StyledBox>
          <ApprovedImagesTab approvedPhotos={approvedPhotos} />
          <ImageRecomendationBox
            isLoading={isLoading}
            photo={url ?? ""}
            loadPhotos={loadPhotos}
          />
          {url ? (
            <ButtonBar onApprove={onApprove} onReject={onReject} />
          ) : (
            <FooterText>
              Click + in order to get image recommendations
            </FooterText>
          )}
        </StyledBox>
      </BoxWrapper>
    </Wrapper>
  );
}
const mapStateToProps = (state) => ({
  photo: state.Photos.photo,
  isLoading: state.Photos.isLoading,
  approvedPhotos: state.Photos.approvedPhotos,
});

export default connect(mapStateToProps, {
  loadPhotosAction,
  approvePhotoAction,
})(App);
