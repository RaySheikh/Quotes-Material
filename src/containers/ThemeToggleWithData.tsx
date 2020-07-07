import React from "react";
import ThemeSwitchToggle from "../components/ThemeSwitchToggle";
import { useDispatch, useSelector } from "react-redux";
import { SWITCH_THEME } from "../actions/constants";

type ThemeState = {
  darkState: boolean;
  switchTheme: any;
};

const ThemeSwitchToggleWithData = () => {
  const dispatch = useDispatch();
  const { darkState } = useSelector((state: ThemeState) => ({
    ...state.switchTheme,
  }));

  const handleThemeChange = () => {
    dispatch({
      type: SWITCH_THEME,
      payload: !darkState,
    });
  };
  return (
    <ThemeSwitchToggle
      darkState={darkState}
      handleThemeChange={handleThemeChange}
    />
  );
};

export default ThemeSwitchToggleWithData;
