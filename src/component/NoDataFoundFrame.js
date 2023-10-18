import { Box, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import SettingsContext from "src/context/SettingsContext";

export default function NoDataFoundFrame({ data }) {
  const themeSettings = useContext(SettingsContext);
  return (
    <Box align="center" mt={1} width="100%">
      <img
        src={
          "images/DarkFrame.png"
        }
        style={{ maxWidth: "260px" }}
        alt="dummy"
      />
      <Typography
        variant="body1"
        style={
          themeSettings.settings.theme === "DARK"
            ? { color: "#6b6b6b", fontSize: "14px" }
            : { color: "#9eb8ea", fontSize: "14px" }
        }
      >
        {data}
      </Typography>
    </Box>
  );
}
