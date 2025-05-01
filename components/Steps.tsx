import React from "react";

const Steps = () => {
  return (
    <section className="bg-black text-center px-6 py-20">
      <h2 className="text-yellow-400 text-3xl md:text-5xl font-extrabold uppercase mb-12">
        Here’s how it works <br /> in 3 simple steps
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        {/* Step 1 */}
        <div className="bg-neutral-800 text-white px-6 py-8 rounded-3xl shadow-lg w-full md:w-80">
          <h3 className="text-yellow-400 font-extrabold text-xl md:text-2xl mb-2">
            Step 1
          </h3>
          <p className="text-[#c8d9cb] font-extrabold text-xl leading-tight mb-4">
            Strategize <br /> Together
          </p>
          <img
            src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/f49305cc-2546-48bd-99cf-4a75797f3f64/Chat.png"
            alt="Chat icon"
            className="mx-auto w-16 md:w-20"
          />
        </div>

        {/* Step 2 */}
        <div className="bg-neutral-800 text-white px-6 py-8 rounded-3xl shadow-lg w-full md:w-80">
          <h3 className="text-yellow-400 font-extrabold text-xl md:text-2xl mb-2">
            Step 2
          </h3>
          <p className="text-[#c8d9cb] font-extrabold text-xl leading-tight mb-4">
            I Handle <br /> Everything
          </p>
          <img
            src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/e420d50c-7e89-4ae0-b6e8-0d10683af1a8/Work.png"
            alt="Work icon"
            className="mx-auto w-16 md:w-20"
          />
        </div>

        {/* Step 3 */}
        <div className="bg-neutral-800 text-white px-6 py-8 rounded-3xl shadow-lg w-full md:w-80">
          <h3 className="text-yellow-400 font-extrabold text-xl md:text-2xl mb-2">
            Step 3
          </h3>
          <p className="text-[#c8d9cb] font-extrabold text-xl leading-tight mb-4">
            Receive & <br /> Launch
          </p>
          <img
            src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/a3f65620-12e4-46e1-971a-7b4a01ae67bc/Launch.png"
            alt="Launch icon"
            className="mx-auto w-16 md:w-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
