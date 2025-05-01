const Testimonials = () => {
    return (
      <section className="bg-gradient-to-b from-[#c1cebc] to-black text-white py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-left leading-snug max-w-3xl">
          WHAT ARE <br /> THEY SAYING?
        </h2>
  
        <div className="mt-10 space-y-10">
          {/* Testimonial 1 - Glad */}
          <div className="bg-[#2d2d2d] p-8 rounded-3xl max-w-5xl ml-auto relative">
            <p className="text-lg font-semibold italic text-[#c1cebc]">
              – 
              <span className="not-italic font-bold">
                “I HAD THE BEST EXPERIENCE WORKING WITH SYNCED. HE <span className="text-yellow-400">UNDERSTOOD EXACTLY WHAT WAS REQUIRED FROM A VERY SHORT MESSAGE.</span> OVERALL PROCESS WAS SUPER PROFESSIONAL AND SMOOTH. 100% RECOMMEND THEIR SERVICES TO ANYONE IN NEED OF 3D ANIMATIONS.”
              </span>
            </p>
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/662cd6dd-41cd-4cff-ab72-e4f605e1dd62/Outlook-ea4djg5y.png"
              alt="Glad logo"
              className="absolute bottom-4 right-6 w-24"
            />
          </div>
  
          {/* Testimonial 2 - Modhaus */}
          <div className="bg-[#2d2d2d] p-8 rounded-3xl max-w-5xl mr-auto relative">
            <p className="text-lg font-semibold italic text-[#c1cebc]">
              –
              <span className="not-italic font-bold">
                “IT WAS GREAT WORKING WITH SYNCED AND COLLABORATING WITH JERÓNIMO. <span className="text-yellow-400">GREAT COMMUNICATION AND UNDERSTOOD THE BRAND AND VISION IMMEDIATELY.</span> DELIVERED THE PROJECT VERY FAST AND EXCEEDED OUR EXPECTATIONS, HIGHLY RECOMMEND.”
              </span>
            </p>
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/757bb5e4-f632-4f6a-94dc-746e35a0494a/Logo.png"
              alt="Modhaus logo"
              className="absolute bottom-4 right-6 w-20"
            />
          </div>
  
          {/* Testimonial 3 - AMMP */}
          <div className="bg-[#2d2d2d] p-8 rounded-3xl max-w-6xl ml-auto relative">
            <p className="text-lg font-semibold italic text-[#c1cebc]">
              –
              <span className="not-italic font-bold">
                “WORKING WITH SYNCED WAS AN <span className="text-yellow-400">OUTSTANDING EXPERIENCE.</span> THEY WERE ABLE TO TAKE A <span className="text-yellow-400">VAGUE IDEA</span> AND TRANSFORM IT <span className="text-yellow-400">INTO STUNNING 3D RENDERINGS</span> AND AN ANIMATION THAT EXCEEDED OUR EXPECTATIONS. THEIR SEAMLESS COMMUNICATION AND PROFESSIONALISM MADE THE COLLABORATION EFFORTLESS. THE END RESULT NOT ONLY ENHANCED OUR PRODUCT VISUALIZATION BUT ALSO STRENGTHENED OUR MARKET POSITION AND SALES POTENTIAL. WE HIGHLY RECOMMEND SYNCED FOR THEIR EXCEPTIONAL ABILITY TO TURN IDEAS INTO REALITY.”
              </span>
            </p>
            <img
              src="https://images.squarespace-cdn.com/content/v1/661abfabac9e5c5dad603be9/e8c85f66-d758-4625-b369-7c8c9e932727/Logo.png"
              alt="AMMP logo"
              className="absolute bottom-4 right-6 w-24"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  