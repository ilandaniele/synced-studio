import React from "react";

const Services = () => {
  return (
    <section className="bg-[#2A2A2A] text-white text-center py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold italic text-[#C8D3C2] mb-4">
        UNLOCK YOUR BRANDS POTENTIAL
        <br />
        <span className="text-3xl md:text-4xl">WITH THESE 3 SERVICES</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-16">
        {/* Essential Visuals */}
        <div className="bg-black rounded-2xl p-6 max-w-sm flex flex-col items-center">
          <h3 className="text-yellow-400 font-medium text-lg mb-2">Essential Visuals</h3>
          <p className="text-yellow-400 font-extrabold text-3xl">STARTING AT</p>
          <p className="text-yellow-400 font-extrabold text-4xl mb-3">$1,500</p>
          <p className="text-sm text-yellow-200 mb-2">
            New Client Special: Save $200 for a limited time!
          </p>
          <p className="text-yellow-300 font-bold text-sm mb-4">
            5 High-Resolution 3D Product Images or Ad Creatives
          </p>
          <p className="italic text-sm text-gray-300 mb-4">
            Best for small e-commerce brands launching a product or refreshing visuals
          </p>
          <ul className="text-left text-sm text-white list-disc pl-6 space-y-2 mb-6">
            <li>Stand out with stunning visuals</li>
            <li>Build trust with polished imagery</li>
            <li>Boost clicks with captivating content</li>
            <li>Increase sales through striking visuals</li>
            <li>Solidify brand identity</li>
          </ul>
          <p className="text-xs text-gray-400">1-2 weeks</p>
          <p className="text-sm">Turnaround Time</p>
          <button className="mt-4 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Dynamic Engagement */}
        <div className="bg-[#2D2D2D] rounded-2xl p-6 max-w-sm flex flex-col items-center shadow-xl shadow-yellow-200/30">
          <h3 className="text-yellow-400 font-medium text-lg mb-2">Dynamic Engagement</h3>
          <p className="text-yellow-400 font-extrabold text-4xl">$3,500 - $5,000</p>
          <p className="text-yellow-200 text-sm mt-1 mb-2">[Most Popular] Save $500 for bookings this week!</p>
          <p className="text-yellow-300 font-bold text-sm mb-4">
            10 High-Resolution 3D Images and a 15s Product Animation
          </p>
          <p className="italic text-sm text-gray-300 mb-4">
            Best for Mid-sized brands looking for more engaging content to improve sales and marketing ROI
          </p>
          <ul className="text-left text-sm text-white list-disc pl-6 space-y-2 mb-6">
            <li>Engage customers with detailed visuals</li>
            <li>Drive conversions with animations</li>
            <li>Enhance product presentations</li>
            <li>Stand out on social media with shareable content</li>
            <li>Build confidence with detailed product views</li>
          </ul>
          <p className="text-xs text-gray-400">2-3 weeks</p>
          <p className="text-sm">Turnaround Time</p>
          <div className="bg-yellow-400 text-black w-full text-center font-bold py-2 mt-4 rounded-b-xl">
            Most Popular
          </div>
          <button className="mt-4 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Most Popular – Book Now!
          </button>
        </div>

        {/* Premium Experience */}
        <div className="bg-black rounded-2xl p-6 max-w-sm flex flex-col items-center">
          <h3 className="text-yellow-400 font-medium text-lg mb-2">Premium Experience</h3>
          <p className="text-yellow-400 font-extrabold text-4xl">$7,500+</p>
          <p className="text-yellow-400 font-extrabold text-2xl leading-tight mb-2">(CUSTOM<br />QUOTE)</p>
          <p className="text-yellow-200 text-sm mb-2">
            Includes a free creative strategy session for first-time clients!
          </p>
          <p className="text-yellow-300 font-bold text-sm mb-4">
            20 High-Resolution Images, 3 20s Animations, and 5 3D Ad Creatives
          </p>
          <p className="italic text-sm text-gray-300 mb-4">
            Best for Established brands aiming to dominate their niche with a full-scale 3D content strategy
          </p>
          <ul className="text-left text-sm text-white list-disc pl-6 space-y-2 mb-6">
            <li>Establish market dominance</li>
            <li>Launch powerful, eye-catching ad campaigns</li>
            <li>Maximize impact with unmatched clarity</li>
            <li>Versatile animations for multi-channel use</li>
            <li>Boost customer loyalty with stunning content</li>
          </ul>
          <p className="text-xs text-gray-400">4 weeks (or custom timelines depending on scope)</p>
          <button className="mt-4 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Contact Us for a Custom Quote
          </button>
        </div>
      </div>

      <p className="text-sm text-yellow-300 mt-10 max-w-3xl mx-auto">
        We are committed to delivering the highest attention to detail and exceptional quality.
        Because of this, <a href="#" className="underline">we accept only 2-4 clients per month. Secure your spot today!</a>
      </p>
    </section>
  );
};

export default Services;
