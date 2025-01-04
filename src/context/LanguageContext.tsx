"use client";
import { ILanguageType } from "@/types";
import { createContext, useState } from "react";

export const LanguageContext = createContext<ILanguageType>({
  language: "c",
  setLanguage: () => {},
});

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("c");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
