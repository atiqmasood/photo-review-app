import * as React from "react";
import styled from "styled-components";
// MUI
import AddButton from "./AddButton";
import MuiTabs from "./MuiTabs";

const ApprovedImages = styled.h4`
  color: #2196f3;
`;
const AddButtonWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  background: #d9dddf;
  margin-bottom: 11px;
  justify-content: center;
  cursor: pointer;
`;

export default function ApprovedImagesTab({ approvedPhotos }) {
  return (
    <div>
      <ApprovedImages>
        Approved Images ({approvedPhotos?.length ?? 0})
      </ApprovedImages>
      {approvedPhotos?.length > 0 ? (
        <MuiTabs photos={approvedPhotos} />
      ) : (
        <AddButtonWrapper>
          <AddButton />
        </AddButtonWrapper>
      )}
    </div>
  );
}
