import * as React from "react";
import styled from "styled-components";
// MUI
import AddIcon from "@mui/icons-material/Add";

const StyleAddIcon = styled(AddIcon)`
  color: #858181b3;
  font-size: 50px !important;
  margin: auto;
`;

export default function AddButton() {
  return <StyleAddIcon />;
}
