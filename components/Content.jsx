"use client";  // Ensures this component runs on the client

import React, { useEffect, useState, Suspense, useRef } from "react"; // Added useRef import
import "tailwindcss/tailwind.css";
import dynamic from "next/dynamic";
import Movingtext from "./Movingtext";
import Crystal from "./Crystal";
import Shape from "./Shape";
import ThreeScene from '../components/ThreeScene';

const Content = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Set to true for autoplay
  const audio = useRef(null); // Initialize useRef as null

  useEffect(() => {
    audio.current = new Audio("/audio/bg_audio.mp3"); // Create audio instance in useEffect
    audio.current.loop = true; // Set loop on the current audio instance
    if (isPlaying) {
      audio.current.play().catch((error) => console.log("Autoplay blocked:", error));
    } else {
      audio.current.pause();
    }
    return () => {
      audio.current.pause();
      audio.current.currentTime = 0; // Reset audio when component unmounts
    };
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      {/* First Section */}
      
      

      <div className='fixed bottom-4 right-4 z-50'>
        <button onClick={toggleAudio} className="bg-black text-white p-2 rounded shadow-lg relative overflow-hidden">
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>
          {/* 3d section  */}
          <div className="flex justify-center ">
            <ThreeScene />
            
          </div>

      <div className="px-4 h-[65vh] w-full flex items-end justify-between pb-[3vw] border-b border-black box-border font-[Arial,Helvetica,sans-serif]">
        <div className="left w-[45%] ">
          <h4 className="font-bold text-[4vw] md:text-[1.7vw] tracking-tighter">
            Halo is a military science fiction video game series and media franchise, originally developed by Bungie and currently managed and developed by Halo Studios, part of Microsoft's Xbox Game Studios.
          </h4>
        </div>
        <div className="right text-right">
          <h1 className="text-[14vw] md:text-[10vw] font-semibold leading-[12vw] md:leading-[8vw]">
            SPACES <br />
            THAT <br />
            INSPIRE
          </h1>
        </div>
      </div>

      {/* Hero Shape */}

      <Shape />

      {/* 3d Section */}
      <div className="w-full relative z-0 mt-[4vw] rounded-[25px] h-auto">
        <Crystal />
      </div>

      {/* Moving Text Section */}
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Movingtext /> {/* Fixed component name to match import */}
        </Suspense>
      </div>
    </>
  );
};

export default Content;
