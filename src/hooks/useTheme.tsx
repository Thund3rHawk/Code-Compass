'use client'
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ChatProvider");
  }
  return context;
};

export default useTheme;