import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Texto */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          HI, I’M <span className="text-yellow-400">JERONIMO CANALE</span> FROM URUGUAY, AND I BRING YOUR PRODUCTS TO LIFE WITH
          <span className="text-yellow-400"> STUNNING 3D VISUALS</span>.
        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-300">
          Having traveled around the world, I’ve gained diverse perspectives that have fueled my creativity and passion for delivering high-quality 3D product visualizations that elevate your brand.
        </p>

        <p className="mt-4 text-base md:text-lg text-gray-300">
          My superpowers? Rapid turnaround, flawless execution, and a no-charge revision policy until you’re thrilled with the results.
        </p>

        <p className="mt-4 text-base md:text-lg text-gray-300">
          Trust in my expertise to make your products stand out and captivate your audience.
        </p>
      </div>

      {/* Imagen */}
      <div className="md:w-1/2 rounded-3xl overflow-hidden">
        <img
          src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/ad9b0064-a01a-4035-b871-cd45ed77c9e2/Compressed_Packaging_002.jpg"
          alt="Jeronimo Canale"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default AboutUs;
