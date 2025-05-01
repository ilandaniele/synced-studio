import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-black text-white px-6 py-20 flex flex-col md:flex-row items-center justify-center">
      {/* Imagen lateral */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/31862f3a-b401-4fc3-9b7d-090ee96fc62d/WaterShot.png"
          alt="Aquela Kombucha"
          className="w-full h-auto rounded-tl-[250px]"
        />
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 md:pl-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          <span className="text-yellow-400">READY</span> FOR 3D <br /> VISUALS THAT <br />
          <span className="text-yellow-400">BOOST YOU SALES</span>?
        </h2>

        <p className="mb-2">
          Fill out the form below, and I’ll be in touch to discuss how we can <span className="text-yellow-400">boost your sales</span> with captivating 3D visuals.
        </p>
        <p className="italic text-sm mb-6">
          Don’t love forms? Drop me an email at <a href="mailto:info@synced-studio.eu" className="text-yellow-400">info@synced-studio.eu</a>
        </p>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm">First Name <span className="text-gray-400">(required)</span></label>
              <input type="text" className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded" />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm">Last Name</label>
              <input type="text" className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded" />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">Email <span className="text-gray-400">(required)</span></label>
            <input type="email" className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm">Subject <span className="text-gray-400">(required)</span></label>
            <input
              type="text"
              placeholder="I want to transform my visuals!"
              className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Message <span className="text-gray-400">(required)</span></label>
            <textarea className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded" rows={5}></textarea>
          </div>

          <button type="submit" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
