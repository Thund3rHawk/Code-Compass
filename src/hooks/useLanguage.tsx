'use client'
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a ChatProvider");
  }
  return context;
};

export default useLanguage;