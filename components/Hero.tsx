'use client';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-visible bg-[#160d09]">
      <div className="w-full">
        <Image
          src="/images/synced-choco.jpg"
          alt="Synced Chocolate"
          // medidas reales de tu asset (opcional, pero útiles)
          width={4746}
          height={2855}
          // máxima nitidez
          quality={100}
          // 📌 Desactiva el optimizador: entrega el original tal cual
          unoptimized
          // que ocupe todo el ancho y ajuste la altura proporcionalmente
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
