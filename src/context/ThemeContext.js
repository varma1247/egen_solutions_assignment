import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, setDarkMode: setDarkMode }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
