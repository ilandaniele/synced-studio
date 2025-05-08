'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/662cd6dd-41cd-4cff-ab72-e4f605e1dd62/Outlook-ea4djg5y.png",
    alt: "Glad",
    width: 240,
    height: 112,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/c88396ae-abc4-490f-849c-1a1a9fe25d8c/Logo.png",
    alt: "Perfect Ted",
    width: 260,
    height: 112,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/e0288289-5355-4c07-a906-a9432d4a9095/AK+logo.png",
    alt: "Aquela Kombucha",
    width: 240,
    height: 112,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/757bb5e4-f632-4f6a-94dc-746e35a0494a/Logo.png",
    alt: "Modhaus",
    width: 260,
    height: 112,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/8176ed26-38ca-4268-a8f3-34245624d0e5/Therealstudio_logo+copy.png",
    alt: "The Real Studio",
    width: 260,
    height: 112,
  },
  {
    src: "/images/Reese's_logo.png",
    alt: "Reese's",
    width: 260,
    height: 112,
  },
];

const TrustedBy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = useRef<number>(0);

  const animate = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollSpeed.current;

      const maxScroll = containerRef.current.scrollWidth / 2;
      if (containerRef.current.scrollLeft >= maxScroll) {
        containerRef.current.scrollLeft = 0;
      } else if (containerRef.current.scrollLeft <= 0) {
        containerRef.current.scrollLeft = maxScroll;
      }
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      scrollSpeed.current = event.deltaY > 0 ? 1.5 : -1.5;
    };

    window.addEventListener('wheel', handleWheel);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="bg-[#160d09] text-white relative z-10 pb-10 overflow-hidden">
      <div className="px-4 pt-10 max-w-7xl mx-auto text-center">
        <h2 className="text-white text-sm font-semibold tracking-widest mb-8">TRUSTED BY:</h2>
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap no-scrollbar px-8 py-4"
        >
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="inline-block mx-6 min-w-[150px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                unoptimized
                className="h-28 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
