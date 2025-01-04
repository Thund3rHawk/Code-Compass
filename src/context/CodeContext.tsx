"use client";
import { ICodeType } from "@/types";
import { createContext, useState } from "react";

export const CodeContext = createContext<ICodeType>({
  code: "",
  setCode: () => {},
});

const CodeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [code, setCode] = useState<string | undefined>("// Paste your code here");

  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export default CodeProvider;
