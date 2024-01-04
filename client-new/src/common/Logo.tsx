import React from "react";
import { Typography, useTheme } from "@mui/material";
const Logo = () => {
  const theme = useTheme();

  console.log(theme);
  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      HOAI<span style={{ color: theme.palette.background.default}}>PHUONG</span>
    </Typography>
  );
};

export default Logo;
