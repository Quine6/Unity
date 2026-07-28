"use client";

import { useEffect, useState } from "react";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[#07090b] dark">
        <div className="w-12 h-12 rounded-full border-4 border-gray-800 border-t-[#00e5ff] animate-spin mb-4"></div>
        <p className="text-[#00e5ff] text-sm font-medium tracking-widest">CARGANDO NEXUS GAME LAB...</p>
      </div>
    );
  }

  return <>{children}</>;
}
