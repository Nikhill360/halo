"use client";

import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="w-full py-[2vw] bg-[rgb(239, 234, 227)] flex items-center justify-between px-[2vw]">
        <img src="/logo/halologo.png" 
             alt="Sundown Logo"
             className="w-[120px] md:w-[150px] lg:w-[180px]" />
             {/* audio */}
             {/* <div className="flex items-center">
               <audio src="/audio/bg_audio.mp3" autoPlay loop controls className="h-8 w-32" />
             </div> */}


        <div id="nav-part2" className="hidden md:flex items-center gap-[1vw]">
          {["Work", "Studio", "Contact"].map((item, index) => (
            <h4 key={index} className="border border-[rgb(104,103,103)] px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-[25px] text-black text-[14px] md:text-[16px] lg:text-[18px] font-[Arial,Helvetica,sans-serif] relative transition-all duration-[0.4s] ease-in-out overflow-hidden after:content-[''] after:absolute after:rounded-full after:h-full after:w-full after:bg-black after:left-0 after:-bottom-full after:transition-all after:duration-[0.4s] hover:after:bottom-0 hover:after:rounded-none">
              <a className="no-underline text-[rgba(0,0,0,0.664)] relative z-[9] hover:text-white" href="#">
                {item}
              </a>
            </h4>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-black text-2xl">☰</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg logo

// "use client";

// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audio, setAudio] = useState(null); // Changed type to null

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const newAudio = new Audio("/audio/bg_audio.mp3");
//       newAudio.loop = true;
//       setAudio(newAudio);
//     }
//   }, []);

//   const toggleAudio = () => {
//     if (!audio) return;

//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play().catch((error) => console.log("Autoplay blocked:", error));
//     }
//     setIsPlaying((prev) => !prev);
//   };

//   return (
//     <div>
//       <nav className="w-full py-[2vw] bg-[rgb(239, 234, 227)] flex items-center justify-between px-[2vw]">
//         <img
//           src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
//           alt="Sundown Logo"
//           className="w-[120px] md:w-[150px] lg:w-[180px]"
//         />

//         <div className="flex items-center">
//           <button
//             onClick={toggleAudio}
//             className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition"
//             title={isPlaying ? "Pause Music" : "Play Music"}
//           >
//             {isPlaying ? "Pause" : "Play"}
//           </button>
//         </div>

//         <div id="nav-part2" className="hidden md:flex items-center gap-[1vw]">
//           {["Work", "Studio", "Contact"].map((item, index) => (
//             <h4
//               key={index}
//               className="border border-gray-700 px-4 py-2 rounded-[25px] text-black relative transition-all duration-[0.4s] ease-in-out overflow-hidden hover:bg-black hover:text-white"
//             >
//               <a href="#" className="no-underline">
//                 {item}
//               </a>
//             </h4>
//           ))}
//         </div>

//         <div className="md:hidden">
//           <button className="text-black text-2xl">☰</button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
