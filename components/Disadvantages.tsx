const Disadvantages = () => {
    return (
      <section className="bg-black text-white text-center px-6 py-16">
        {/* Título y descripción */}
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 uppercase leading-tight tracking-wide">
            What’s the cost of blending in?
            <br />
            Lost sales, wasted ads, and slow 
            <br />
            growth.
          </h2>
  
          <p className="text-sm md:text-base text-gray-200 mt-4 font-semibold leading-relaxed max-w-4xl mx-auto custom-text">
            NOT INVESTING IN <span className="text-yellow-400">PROFESSIONAL 3D VISUALS</span> DOESN’T JUST HURT 
            <br />
            YOUR BRAND, IT COSTS YOU CUSTOMERS, GROWTH, AND SALES.
            <br />
            HERE’S HOW IGNORING VISUAL QUALITY COULD BE
            <br />
            <span className="text-yellow-400">HOLDING YOUR BUSINESS BACK</span>:
          </p>
        </div>
  
        {/* Secciones */}
        <div className="mt-30 flex flex-col md:flex-row justify-center items-start gap-y-10 md:gap-x-12">
          {/* Wasted Ad Budget */}
          <div className="flex flex-col items-center max-w-sm">
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/90f86afd-010b-4f97-ba87-5913b9ac6438/AdLost.png"
              alt="Wasted ad"
              className="w-64 h-auto mb-3"
            />
            <h3 className="text-yellow-400 font-extrabold text-2xl uppercase leading-snug">
              Wasted <br /> Ad Budget
            </h3>
            <p className="text-gray-300 mt-2 text-base leading-relaxed">
              <span className="font-semibold">Poor visuals mean wasted clicks</span>, low ROI, and ads that fail to convert. Every dollar spent on underperforming ads is a <span className="font-semibold">dollar lost</span>.
            </p>
          </div>
  
          {/* Lost Sales (más grande y elevado) */}
          <div className="flex flex-col items-center max-w-sm -mt-40">
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/32be3ba0-2bda-47d1-ab95-97ef86a31bbe/LostSales.png"
              alt="Lost sales"
              className="w-84 h-auto mb-3"
            />
            <h3 className="text-yellow-400 font-extrabold text-2xl uppercase -mt-20">
              Lost Sales
            </h3>
            <p className="text-gray-300 mt-2 text-base leading-relaxed">
              Customers scroll past products that don’t grab their attention in the first 3 seconds. Without standout visuals, your products get lost in the noise.
            </p>
            <button className="mt-30 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Make Appointment
            </button>
          </div>
  
          {/* Weak Brand Presence */}
          <div className="flex flex-col items-center max-w-sm">
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/514802b1-774d-453c-bca0-0df70e65b9a5/LogoBlurred.png"
              alt="Weak brand"
              className="w-64 h-auto mb-3"
            />
            <h3 className="text-yellow-400 font-extrabold text-2xl uppercase leading-snug text-center">
              Weak <br /> Brand Presence
            </h3>
            <p className="text-gray-300 mt-2 text-base leading-relaxed">
              Without professional visuals, your brand risks blending into the crowd. 3D visuals create a premium, lasting impression that elevates your brand.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Disadvantages;
  