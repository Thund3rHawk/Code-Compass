'use client'
import React from "react";
import { Button } from "../ui/button";
import { CodeNav } from "./CodeNav";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CodeEditor from "./CodeEditor";
import ThemeProvider from "@/context/ThemeContext";
import LanguageProvider from "@/context/LanguageContext";
import useCode from "@/hooks/useCode";

const CodeArea = () => {
  const {code} = useCode();
  function analyzeCode(){
    console.log(code);    
  }

  return (
      <LanguageProvider>
      <ThemeProvider>
        <div className="h-2/3 w-1/2 rounded-md m-5 bg-[#F9FAFB]">
          <CodeNav />
          <div className="m-2 bg-white">
            {/* that should be the codearea */}
            <CodeEditor />
          </div>
        </div>
        <Button onClick = {analyzeCode}>
          <AutoAwesomeIcon className="text-orange-300" />
          Analyze Code
        </Button>
      </ThemeProvider>
      </LanguageProvider>
  );
};

export default CodeArea;
