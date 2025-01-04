'use client'

import { CodeContext } from "@/context/CodeContext";
import { useContext } from "react";

const useCode = () => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error("useCode must be used within a ChatProvider");
  }
  return context;
};

export default useCode;