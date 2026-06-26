import { createContext, useContext } from "react";

export const TheameContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = TheameContext.Provider

export default function useTheme() {
    return useContext(TheameContext)
}
