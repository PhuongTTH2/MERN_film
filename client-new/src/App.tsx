import React, { useEffect, useState } from "react";
import "./App.css";
import Routes from "routes/Routes";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import themeConfigs from "./configs/theme.configs";
const App: React.FC = () => {
  const { themeMode } = useSelector((state: any) => state.themeMode);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <Routes />;
    </ThemeProvider>
  );
};

export default App;
