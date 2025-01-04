"use client";
import { IThemeType } from "@/types";
import { createContext, useState } from "react";

export const ThemeContext = createContext<IThemeType>({
  theme: "vs-dark",
  setTheme: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("vs-dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
