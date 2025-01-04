'use client'
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { languages, themes } from "@/utils/constants";
import useTheme from "@/hooks/useTheme";
import useLanguage from "@/hooks/useLanguage";

export function CodeNav() {

  const {setTheme} = useTheme();
  const {setLanguage} = useLanguage();

  return (
    <div className=" border-b border-slate-300 py-2 flex m-auto justify-between px-6">
      <div className="flex gap-4">
        <Select onValueChange={(value)=>{setLanguage(value)}} defaultValue= {languages[0].value}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {languages.map((item, index) => {
                return (
                  <SelectItem key={index} value={item.value}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(v)=>{setTheme(v)}} defaultValue= {themes[0].value}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {themes.map((item, index) => {
                return (
                  <SelectItem key={index} value={item.value}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button variant="outline">Copy</Button>
    </div>
  );
}
