const Advantages = () => {
    return (
      <section className="bg-black text-white px-6 pt-20 pb-10">
        {/* Fondo con imagen y título */}
        <div
          className="rounded-t-[3rem] bg-cover bg-center h-[300px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/d9ab65f5-45d6-4d2d-a5b8-14598ee6afaa/Shot_03.png')",
          }}
        >
          <h2 className="text-yellow-400 text-3xl md:text-5xl font-extrabold text-center uppercase">
            Here’s what you’ll achieve
            <br />
            with us
          </h2>
        </div>
  
        {/* Primera fila */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-start gap-y-12 md:gap-x-16 text-center">
          {/* Item 1 */}
          <div className="max-w-xs flex flex-col items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/17a0f0a0-08b7-46e2-9df7-5d9bd4b75a4a/money_bag.png"
              className="w-16 mb-3"
              alt="money bag"
            />
            <h3 className="text-yellow-400 text-2xl font-extrabold uppercase leading-snug">
              Save more, <br /> Spend less
            </h3>
            <p className="text-[#c4d5c3] mt-2 font-bold text-sm leading-tight">
              Get premium visuals that fit your budget.
            </p>
          </div>
  
          {/* Item 2 */}
          <div className="max-w-xs flex flex-col items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/07f6d109-8093-448b-9175-5cd3200a5eb5/Expansion.png"
              className="w-16 mb-3"
              alt="expand arrows"
            />
            <h3 className="text-[#c4d5c3] text-2xl font-extrabold uppercase leading-snug">
              Reclaim your time <br /> to focus on <span className="text-yellow-400">growth</span>
            </h3>
            <p className="text-[#c4d5c3] mt-2 font-bold text-sm leading-tight">
              Delegate your marketing visuals to <br /> trusted experts.
            </p>
          </div>
  
          {/* Item 3 */}
          <div className="max-w-xs flex flex-col items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/ed20cc87-c2bb-4dc4-919a-8339621c6418/Reputation.png"
              className="w-16 mb-3"
              alt="reputation star"
            />
            <h3 className="text-[#c4d5c3] text-2xl font-extrabold uppercase leading-snug">
              Gain <span className="text-yellow-400">confidence</span>
              <br /> with stunning <br /> 3d assets
            </h3>
          </div>
        </div>
  
        {/* Segunda fila */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-start gap-y-12 md:gap-x-16 text-center">
          {/* Item 4 */}
          <div className="max-w-xs flex flex-col items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/060964eb-f64f-4fd8-980e-e977f6ef4edb/Marketing.png"
              className="w-16 mb-3"
              alt="marketing bulb"
            />
            <h3 className="text-yellow-400 text-2xl font-extrabold uppercase leading-snug">
              Streamline <br /> your workflow
            </h3>
            <p className="text-[#c4d5c3] mt-2 font-bold text-sm leading-tight">
              Streamline your branding with ready-to-use, <br /> high-impact visuals.
            </p>
          </div>
  
          {/* Item 5 */}
          <div className="max-w-xs flex flex-col items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/896d61e0-39e8-4bf7-9c31-c22090c9a254/Trust.png"
              className="w-16 mb-3"
              alt="trust shield"
            />
            <h3 className="text-yellow-400 text-2xl font-extrabold uppercase leading-snug">
              Elevate your <br /> brand
            </h3>
            <p className="text-[#c4d5c3] mt-2 font-bold text-sm leading-tight">
              Elevate your business with visuals <br /> that tell your story.
            </p>
          </div>
        </div>
  
        {/* Botón */}
        <div className="mt-16 flex justify-center">
          <button className="bg-yellow-400 text-black px-8 py-4 text-base rounded-full font-semibold shadow-[0_0_90px_10px_rgba(255,255,255,0.3)] hover:opacity-90 transition">
            Make Appointment
          </button>
        </div>
      </section>
    );
  };
  
  export default Advantages;
  