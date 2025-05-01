const logos = [
    { src: "/logos/modhaus.png", alt: "Modhaus" },
    { src: "/logos/aquela.png", alt: "Aquela Kombucha" },
    { src: "/logos/mmp.png", alt: "MMP" },
    { src: "/logos/realstudio.png", alt: "The Real Studio" },
    { src: "/logos/glad.png", alt: "Glad" },
  ];
  
  const TrustedBy = () => {
    return (
      <section className="bg-black py-12 px-6 text-white text-center">
        <h3 className="uppercase text-sm font-bold mb-6 tracking-widest text-white">
          Trusted by:
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default TrustedBy;
  