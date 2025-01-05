"use client";
import React from "react";
import MonacoEditor from "@monaco-editor/react";
import useTheme from "@/hooks/useTheme";
import useCode from "@/hooks/useCode";
import useLanguage from "@/hooks/useLanguage";

const CodeEditor = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const { code, setCode } = useCode();

  return (
    <>
      <MonacoEditor
        height="400px"
        language={language}
        theme={theme}
        value={code}
        onChange={(value) => {
          setCode(value);
        }}
      />
    </>
  );
};

export default CodeEditor;
