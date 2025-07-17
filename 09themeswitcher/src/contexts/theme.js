import { createContext, useContext } from "react";  

export const ThemeContext = createContext({
    themeMode: "light", // default theme
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
    return useContext(ThemeContext)
}  //custom hooks