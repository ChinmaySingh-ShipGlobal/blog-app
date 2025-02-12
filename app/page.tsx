"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import BlogCards from "./blogScreen";

export default function Home() {
  return (
    <div className="bg-black">
      <LampDemo />
      <div className="bg-white grid items-center justify-center ">
        <BlogCards />
      </div>
    </div>
  );
}

const LampDemo = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        <div className="flex items-center justify-center">
          <p className="md:w-1/2">Fuel Your Curiosity, One Post at a Time</p>
        </div>
      </motion.h1>
    </LampContainer>
  );
};
