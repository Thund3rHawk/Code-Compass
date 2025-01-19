'use client'
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoadingScreen from "@/components/shared/LoadingScreen";


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    function switchLoading(){
      setLoading(false);
    }
    setTimeout(switchLoading, 3000);
  },[])

  return (
    <>
      {(loading)?<LoadingScreen/> : <HomePage/>}      
    </>
  );
}
