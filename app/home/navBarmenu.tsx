"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "z-50 cursor-pointer flex items-center justify-center",
        className
      )}
    >
      <div className="rounded-full p-3 px-4 bg-black text-white">
        Add Your Blog . . .
      </div>
    </div>
  );
}
