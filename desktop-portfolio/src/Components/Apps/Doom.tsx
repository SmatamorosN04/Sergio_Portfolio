import { useState } from "react";

export default function Doom() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="w-full h-full bg-black flex flex-col relative min-h-[380px] select-none text-white">
      
      {!isReady && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-zinc-950 p-4 text-center">
          <div className="mb-4 text-red-600 font-black tracking-widest text-lg md:text-xl font-mono uppercase animate-pulse">
            DOOM in portfolio
          </div>
          <p className="text-zinc-400 font-sans text-[11px] max-w-xs mb-4 leading-normal">
            pulse play to start DOOM 
            
          </p>
          <button
            onClick={() => setIsReady(true)}
            className="px-4 py-2 font-sans font-bold text-xs bg-red-700 hover:bg-red-600 active:scale-95 text-white rounded-xs shadow-[0_4px_10px_rgba(220,38,38,0.2)] cursor-pointer transition-all uppercase border-none"
          >
           PLAY
          </button>
        </div>
      )}

      {isReady && (
        <iframe
          src="/doom/index.html"
          className="z-50 w-full flex-1 border-none bg-black"
          allow="autoplay; keyboard; gamepad"
          title="Local Doom JS"
          scrolling="no"
        />
      )}
      
      

    </div>
  );
}