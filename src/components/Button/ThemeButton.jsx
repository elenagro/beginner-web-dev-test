import React from "react";
import { useTheme } from "../../store/theme-context";

import "./ThemeButton.scss";

const ThemeButton = (props) => {
  const { toggleTheme } = useTheme();

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      CHANGE THEME
    </button>
  );
};

export default ThemeButton;
