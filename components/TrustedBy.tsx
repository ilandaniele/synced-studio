'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/662cd6dd-41cd-4cff-ab72-e4f605e1dd62/Outlook-ea4djg5y.png", alt: "Glad" },
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/c88396ae-abc4-490f-849c-1a1a9fe25d8c/Logo.png", alt: "Perfect Ted" },
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/e0288289-5355-4c07-a906-a9432d4a9095/AK+logo.png", alt: "Aquela Kombucha" },
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/757bb5e4-f632-4f6a-94dc-746e35a0494a/Logo.png", alt: "Modhaus" },
  { src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/8176ed26-38ca-4268-a8f3-34245624d0e5/Therealstudio_logo+copy.png", alt: "The Real Studio" },
  { src: "/images/Reese's_logo.png", alt: "Reese's" },
];

const TrustedBy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number>(0);

  useEffect(() => {
    const speed = 0.5; // píxeles por frame, ajusta para más/menos velocidad
    const container = containerRef.current;
    if (!container) return;

    const step = () => {
      const half = container.scrollWidth / 2;

      // si llegamos al inicio, saltamos a la mitad
      if (container.scrollLeft <= 0) {
        container.scrollLeft = half;
      } else {
        container.scrollLeft -= speed; 
      }

      rafRef.current = requestAnimationFrame(step);
    };

    // iniciamos animación
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="bg-[#160d09] text-white relative z-10 pb-10 overflow-hidden">
      <div className="pt-10 max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-semibold tracking-widest mb-8">TRUSTED BY:</h2>
        <div
          ref={containerRef}
          className="flex items-center gap-8 overflow-hidden whitespace-nowrap px-4 py-4"
        >
          {/*
            Renderizamos el array dos veces para que, al llegar al final,
            siga habiendo logos a la derecha y no se “vea vacío”.
          */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: 120 /* todos mismos 120px */, margin: '0 12px' /* gap horizontal */ }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                unoptimized
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
