"use client";
import React from "react";
import { cn } from "@/lib/utils";

const WhiteButton = ({ icon=<></>, label, className="", ...props }) => {
  return (
    <div
      className={cn(
        " cursor-pointer border border-white bg-white hover:bg-neutral-700 text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2 ",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default WhiteButton;