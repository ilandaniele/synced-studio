const Hero = () => {
    return (
      <section className="bg-neutral-900 text-center px-6 py-24 text-white relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight">
          ACCELERATE YOUR SALES <span className="text-gray-200">WITH</span><br />
          <span className="italic text-green-100">IMPACTFUL 3D PRODUCT VISUALS</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-base md:text-lg">
          Empower your business to achieve the sales you need to realize your vision, more freedom, growth, and the success you’ve always dreamed of.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition">
            Get free consultation
          </button>
          <button className="bg-yellow-400 text-black px-8 py-6 rounded-full font-semibold hover:opacity-90 transition">
            Make appointment
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  