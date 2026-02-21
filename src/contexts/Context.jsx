import { createContext, useState } from "react";

export const ThemeContext = createContext(
  localStorage.getItem("theme") || "light",
);

export function ThemeProvider({ children }) {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
