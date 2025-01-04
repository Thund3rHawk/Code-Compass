"use client";
import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import useTheme from "@/hooks/useTheme";
import useLanguage from "@/hooks/useLanguage";
import { Button } from "../ui/button";
import useCode from "@/hooks/useCode";

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
