import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function VillaGallery() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const fullscreenRef = useRef(null);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // HERO EXIT
    tl.to(heroRef.current, {
      opacity: 0,
      y: -200,
      duration: 1.2,
      delay: 1.5,
      ease: "power3.inOut",
      onComplete: () => {
        heroRef.current.style.display = "none"; // ❗ safest
      },
    });

    // SHOW GALLERY (remove from layout, then animate)
    tl.set(galleryRef.current, {
      display: "grid", // ❗ show gallery instantly
    });

    tl.to(galleryRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  const openFullscreen = (src) => {
    setFullscreenImg(src);
    setTimeout(() => {
      gsap.fromTo(
        fullscreenRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }, 10);
  };

  const closeFullscreen = () => {
    gsap.to(fullscreenRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => setFullscreenImg(null),
    });
  };

  const images = ["/image11.png", "/image6.png", "/image13.png", "/image3.png"];

  return (
    <div className="w-full md:min-h-screen bg-black">

      {/* HERO */}
      <div
        ref={heroRef}
        className="relative w-full h-[70vh] md:h-screen overflow-hidden flex items-center justify-center"
      >
        <img src="/image15.png" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Classy Villa
          </h1>
          <p className="text-white text-base md:text-xl max-w-xl md:max-w-2xl">
             A villa that blends style, space, and sophistication to create the perfect retreat for fine living.
          </p>
        </div>
      </div>

      {/* GALLERY 🚀 hidden (NO LAYOUT SPACE TAKEN) */}
      <div
        ref={galleryRef}
        className="hidden opacity-0 translate-y-20 
                   w-full pt-10 md:py-16 px-4 md:px-6 
                   grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10"
      >
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img
              src={src}
              className="w-full h-72 md:h-96 object-cover rounded-lg"
              alt=""
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center 
                            opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
              <button
                onClick={() => openFullscreen(src)}
                className="px-6 py-2 bg-white text-black font-semibold rounded-md cursor-pointer"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN */}
      {fullscreenImg && (
        <div
          ref={fullscreenRef}
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-[999]"
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 text-white text-xl md:text-2xl font-bold 
                       hover:scale-110 transition-transform cursor-pointer"
          >
            ✕
          </button>

          <img
            src={fullscreenImg}
            className="w-[90%] md:w-[70%] lg:w-[55%] rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}
