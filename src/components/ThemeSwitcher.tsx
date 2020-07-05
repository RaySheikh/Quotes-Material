import React, { useState, ReactNode } from "react";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";

// For Switch Theming
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

type Props = {
  children: ReactNode;
};

const ThemeSwitcher = ({ children }: Props) => {
  const { darkState } = useSelector((state) => ({
    ...state.switchTheme,
  }));
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ThemeSwitcher;
