"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CodeNav } from "./CodeNav";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CodeEditor from "./CodeEditor";
import ThemeProvider from "@/context/ThemeContext";
import LanguageProvider from "@/context/LanguageContext";
import useCode from "@/hooks/useCode";
import { useCopilotChat } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import WarningCard from "./WarningCard";
import ErrorCard from "./ErrorCard";
import { ToastAction } from "@radix-ui/react-toast";
// import ReactMarkdown from 'react-markdown'
// import Markdown from "react-markdown";

const CodeArea = () => {
  const { code } = useCode();
  const [warnings, setWarnings] = useState ([]);
  const [errors, setErrors] = useState ([]);
  const {
    visibleMessages, // An array of messages that are currently visible in the chat.
    appendMessage, // A function to append a message to the chat.
    // setMessages, // A function to set the messages in the chat.
    // deleteMessage, // A function to delete a message from the chat.
    // reloadMessages, // A function to reload the messages from the API.
    // stopGeneration, // A function to stop the generation of the next message.
    // isLoading, // A boolean indicating if the chat is loading.
  } = useCopilotChat();

  // const extractMessages = (text) => {
  //   const errors = text.match(/\*\*Error:\*\*(.*?)(?=\*\*|$)/gs)?.map(e => 
  //     e.replace(/\*\*Error:\*\*/, '').trim()
  //   ).filter(Boolean) || [];
    
  //   const warnings = text.match(/\*\*Warning:\*\*(.*?)(?=\*\*|$)/gs)?.map(w => 
  //     w.replace(/\*\*Warning:\*\*/, '').trim()
  //   ).filter(Boolean) || [];
    
  //   return { errors, warnings };
  // };


  async function analyzeCode() {
    try {      
      appendMessage(
        new TextMessage({
          content: `Analyze the following code and identify any warnings or errors: \n\n${code} \n\nPlease send results in the format **Error:** and **Warning:** explicitly dont make any bullet points also show a paragraph point only the errors and warnings dont need any description dont show any code snippet.`,
          role: Role.User,
        })
      );

      // @ts-expect-error
      const analysisResult = visibleMessages[1].content || '**Error:** and **Warning:**';      
      // console.log(analysisResult);

      // @ts-ignore
      const error = analysisResult.match(/\*\*Error:\*\*(.*?)(?=\*\*|$)/gs)?.map(e => 
        e.replace(/\*\*Error:\*\*/, '').trim()
      ).filter(Boolean) || [];
      
      // @ts-ignore
      const warning = analysisResult.match(/\*\*Warning:\*\*(.*?)(?=\*\*|$)/gs)?.map(w => 
        w.replace(/\*\*Warning:\*\*/, '').trim()
      ).filter(Boolean) || [];
      
      setWarnings(warning);
      setErrors(error);

    } catch (error) {
      console.error("Error analyzing code:", error);

      // Append error message if something goes wrong
      appendMessage(
        new TextMessage({
          content: "Error analyzing the code. Please try again.",
          role: Role.Assistant,
        })
      );
    }
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
        <Button onClick={analyzeCode}>
          <AutoAwesomeIcon className="text-orange-300" />
          Analyze Code
        </Button>
        {/* {
          visibleMessages.map((item, index)=>{
            return (
              <Markdown className= 'text-justify' key = {index}>{item.content}</Markdown>
            )
          })
        } */}

        {
          warnings.map((item, index)=>{
            return (
              <WarningCard key = {index} message={item}/>
            )
          })
        }
        {
          errors.map((item, index)=>{
            return (
              <ErrorCard key = {index} message={item}/>
            )
          })
        }
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default CodeArea;
