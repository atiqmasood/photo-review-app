import * as React from "react";
// MUI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function MuiTabs({ photos }) {
  return (
    <Box>
      <Tabs
        value={0}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {photos?.length > 0 &&
          photos.map((url, index) => (
            <Tab
              key={index}
              label={<img src={url} width={"80px"} height={"80px"} />}
              disabled
            />
          ))}
      </Tabs>
    </Box>
  );
}
