import React from "react";
import imgPass1 from "../assets/desktop/image 10.jpg";

function Visa() {
  return (
   <div className="bg-gray-100 py-16 px-4 flex justify-center">
      
     
      <div className="relative max-w-4xl w-full mx-auto rounded-xl shadow-2xl overflow-hidden">
        
        {/* Background Image: Absolute positioning to cover the card area */}
        <img 
          src={imgPass1}
          alt="Passport and boarding pass background"
          
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        
        {/* Text and Content Overlay */}
        <div className="relative p-8 md:p-16 h-full text-center text-white">
          
          {/* Headline */}
          <div className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Visa Before You Land
          </div>
          
          {/* Subtitle/Description */}
          <div className="text-base md:text-lg mb-8 max-w-xl mx-auto">
            Discover how Nigeria's Visa on Arrival program makes entry easier 
            for business travelers and visitors.
          </div>
          
          {/* Call to Action Button */}
          <a
            href="#" 
            className="
              inline-block 
              px-10 py-3 
              text-base font-semibold 
              rounded-lg 
              shadow-lg 
              transition duration-300 ease-in-out
              /* Specific green gradient matching the image */
              bg-gradient-to-r from-[#00c853] to-[#00a840] 
              hover:from-[#00a840] hover:to-[#008f36]
            "
          >
            View eligibility guide
          </a>
        </div>
      </div>
    </div>
  );
}

export default Visa;
