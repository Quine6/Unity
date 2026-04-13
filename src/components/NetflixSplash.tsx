"use client";

import { useEffect, useState, useRef } from "react";

export default function NetflixSplash({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const audioContextStarted = useRef(false);

  useEffect(() => {
    // We try to start the audio on the first click or automatically if the browser allows.
    // However, for best results, we play the sound when the component mounts if interaction occurred.
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 1000); // Wait for the fade out animation
    }, 3500);

    const playSound = () => {
      if (audioContextStarted.current) return;
      
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      audioContextStarted.current = true;

      // "Ta-dum" synthesis
      const playBeat = (time: number, freq: number, duration: number, volume: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, time);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.5, time + duration);
        
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(volume, time + 0.05);
        gain.gain.linearRampToValueAtTime(0, time + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(time);
        osc.stop(time + duration);
      };

      // Two deep impact beats
      playBeat(ctx.currentTime + 0.2, 60, 0.4, 0.8);
      playBeat(ctx.currentTime + 0.45, 55, 0.6, 1.0);
    };

    // Attempt to play on mount (might be blocked)
    playSound();
    
    // Also try on any click just in case
    window.addEventListener('click', playSound, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', playSound);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-1000">
      <div className="relative flex flex-col items-center">
        {/* The Animated Logo */}
        <div className="relative animate-netflix-reveal scale-75 md:scale-100">
          <img 
            src="/logo.png" 
            alt="Nexus Game Lab Logo" 
            className="w-64 h-64 object-contain shadow-[0_0_50px_rgba(0,229,255,0.3)] rounded-full animate-pulse-glow opacity-0"
          />
          
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e5ff22] to-transparent bg-[length:100%_4px] animate-scanline pointer-events-none opacity-30"></div>
          
          {/* Glitch overlays */}
          <div className="absolute inset-0 opacity-20 bg-[#00e5ff] mix-blend-screen translate-x-1 animate-glitch-1"></div>
          <div className="absolute inset-0 opacity-20 bg-[#00ff66] mix-blend-screen -translate-x-1 animate-glitch-2"></div>
        </div>
        
        {/* Title Reveal */}
        <h1 className="mt-8 text-4xl font-black tracking-[0.5em] text-white animate-text-reveal opacity-0">
          NEXUS GAME LAB
        </h1>
        
        {/* Loading Bar */}
        <div className="mt-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-green)] animate-loading-bar origin-left"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes netflix-reveal {
          0% { transform: scale(0.5); filter: brightness(0) blur(20px); opacity: 0; }
          20% { transform: scale(1.1); filter: brightness(2) blur(0px); opacity: 1; }
          30% { transform: scale(1); filter: brightness(1); }
          80% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(3); opacity: 0; filter: blur(10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(0,229,255,0.4)); }
          50% { filter: drop-shadow(0 0 30px rgba(0,255,102,0.6)); }
        }

        @keyframes scanline {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }

        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(10% 0 80% 0); transform: translate(2px, 0); }
          50% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, 0); }
        }

        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
          50% { clip-path: inset(20% 0 60% 0); transform: translate(2px, 0); }
        }

        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(20px); letter-spacing: 1em; }
          50% { opacity: 1; transform: translateY(0); letter-spacing: 0.5em; }
          100% { opacity: 0; transform: scale(1.5); }
        }

        @keyframes loading-bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        .animate-netflix-reveal { animation: netflix-reveal 3.5s ease-in-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2s infinite ease-in-out; }
        .animate-scanline { animation: scanline 0.2s linear infinite; }
        .animate-glitch-1 { animation: glitch-1 0.15s infinite linear alternate-reverse; }
        .animate-glitch-2 { animation: glitch-2 0.2s infinite linear alternate-reverse; }
        .animate-text-reveal { animation: text-reveal 3s 0.5s ease-out forwards; }
        .animate-loading-bar { animation: loading-bar 2.5s 0.2s ease-in-out forwards; }
      `}</style>
    </div>
  );
}
