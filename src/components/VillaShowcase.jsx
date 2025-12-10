import React from "react";
import { MapPin, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function VillaShowcase() {

    const navigate = useNavigate();
    // const isAuthenticated = true; // force login ON
  const {isAuthenticated} = useAuthStore();

  const handleBookNow = () => {
    if (!isAuthenticated) {
      navigate("/login"); // redirect to login
    } else {
      navigate("/book"); // user logged in → go to villa detail page
    }
  };


  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-10">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Traverse the Essence of Elevated Living
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Step into a world where sophistication meets serenity.
          Classy Villas Chennai presents a curated collection of premium villas  
          designed for those who seek more than a home — a lifestyle defined by  
          elegance, comfort, and exclusivity.
        </p>
      </div>

      {/* GRID */}
      <div className="relative px-5 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        {/* LEFT IMAGE — centered on mobile */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-fit">

            {/* Top-left frame */}
            <div className="absolute -top-4 -left-4 w-16 h-1 bg-[#8BB6B1]" />
            <div className="absolute -top-4 -left-4 w-1 h-16 bg-[#8BB6B1]" />

            <img
              src="/image1.png"
              alt="Villa Left"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg"
            />

            {/* Bottom-right frame */}
            <div className="absolute -bottom-4 -right-4 w-16 h-1 bg-[#8BB6B1]" />
            <div className="absolute -bottom-4 -right-4 w-1 h-16 bg-[#8BB6B1]" />

          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="text-center space-y-6 px-2 lg:px-6">

          <div className="flex items-center justify-center gap-3 text-gray-300">
            <MapPin className="w-6 h-6 text-[#8BB6B1]" />
            <span className="text-lg">Yelagiri Hills, Chennai</span>
          </div>

          {/* <div className="flex items-center justify-center gap-3 text-gray-300">
            <IndianRupee className="w-6 h-6 text-[#8BB6B1]" />
            <span className="text-lg">12 Cr. Onwards</span>
          </div> */}

          <div className="text-gray-300 text-sm leading-relaxed">
            <p>
              Grand Double-Height Entrance Lounge | Private Landscaped Lawns <br />
              Sunlit Living Spaces with Floor-to-Ceiling Windows <br />
              Infinity Edge Pool & Leisure Deck | Exclusive Sky Lounge with City Views <br />
              Spa & Steam Suite | Indoor Fitness Studio | Meditation & Yoga Pavilion <br />
              Outdoor Kids Play Area & Toddler Zone <br />
              Private Home Theatre Room <br />
              Board Room & Business Lounge | Recessed Water Feature Courtyard <br />
              Pet Garden <br />
              Rooftop Sky Deck & Cabana Zone
            </p>
          </div>

          <button onClick={handleBookNow} className="bg-[#8BB6B1] text-black text-xl font-semibold px-10 py-3 rounded-xl hover:opacity-80 transition">
            Book Now
          </button>

        </div>

        {/* RIGHT IMAGE — centered on mobile */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-fit">

            {/* Top-right frame */}
            <div className="absolute -top-4 -right-4 w-16 h-1 bg-[#8BB6B1]" />
            <div className="absolute -top-4 -right-4 w-1 h-16 bg-[#8BB6B1]" />

            <img
              src="/image2.png"
              alt="Villa Right"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg"
            />

            {/* Bottom-left frame */}
            <div className="absolute -bottom-4 -left-4 w-16 h-1 bg-[#8BB6B1]" />
            <div className="absolute -bottom-4 -left-4 w-1 h-16 bg-[#8BB6B1]" />

          </div>
        </div>

      </div>
    </section>
  );
}
