import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

import VillaShowcase from "../components/VillaShowcase";
import MansionShowcase from "../components/MansionShowcase";
import Contact from "../components/Contact";
import LastOne from "../components/LastOne";

export default function HomePage() {
  const images = ["/home1.png", "/home2.png", "/home3.png", "/home4.png", "/home5.png"];

  const [index, setIndex] = useState(0);

  const currentRef = useRef(null);
  const nextRef = useRef(null);
  const animating = useRef(false);
  const timerRef = useRef(null);

  // ✅ PRELOAD (PREVENT WHITE/BLACK FLASH)
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // ✅ AUTO SLIDE EVERY 2 SECONDS
  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [index]);

  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(slideNext, 2000);
  };

  const slideNext = () => {
    if (animating.current) return;
    animating.current = true;

    const nextIndex = index === images.length - 1 ? 0 : index + 1;

    gsap.set(nextRef.current, {
      x: "100%",
      backgroundImage: `url(${images[nextIndex]})`,
    });

    gsap.to(currentRef.current, {
      x: "-100%",
      duration: 0.9,
      ease: "power2.inOut",
    });

    gsap.to(nextRef.current, {
      x: "0%",
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => {
        setIndex(nextIndex);

        gsap.set(currentRef.current, {
          x: "0%",
          backgroundImage: `url(${images[nextIndex]})`,
        });

        gsap.set(nextRef.current, { x: "100%" });

        animating.current = false;
      },
    });
  };

  const slidePrev = () => {
    if (animating.current) return;
    animating.current = true;

    const prevIndex = index === 0 ? images.length - 1 : index - 1;

    gsap.set(nextRef.current, {
      x: "-100%",
      backgroundImage: `url(${images[prevIndex]})`,
    });

    gsap.to(currentRef.current, {
      x: "100%",
      duration: 0.9,
      ease: "power2.inOut",
    });

    gsap.to(nextRef.current, {
      x: "0%",
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => {
        setIndex(prevIndex);

        gsap.set(currentRef.current, {
          x: "0%",
          backgroundImage: `url(${images[prevIndex]})`,
        });

        gsap.set(nextRef.current, { x: "-100%" });

        animating.current = false;
      },
    });
  };

  return (
    <>
      {/* ✅ PERFECT GSAP HERO SLIDER */}
      <section
        className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-black"
        data-scroll-section
      >
        {/* CURRENT IMAGE */}
        <div
          ref={currentRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />

        {/* NEXT IMAGE (TRANSITION ONLY) */}
        <div
          ref={nextRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* TEXT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Classy Villas</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            At Classy Villas, luxury is defined by detail, artistry, and the
            experience of living well. Each villa is a sanctuary where elegance,
            comfort, and modern design meet in harmony.
          </p>
        </div>

        {/* CONTROLS */}
        <button
          onClick={slidePrev}
          className="absolute bottom-6 left-6 md:left-10 z-30 bg-[#7ba9a7] p-5 rounded-full cursor-pointer"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={slideNext}
          className="absolute bottom-6 right-6 md:right-10 z-30 bg-[#7ba9a7] p-5 rounded-full cursor-pointer"
        >
          <ChevronRight className="text-white" />
        </button>
      </section>

      {/* DESCRIPTION */}
      <section
        className="py-16 px-6 md:px-20 text-center bg-black text-gray-300"
        data-scroll-section
      >
        <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
          Rooted in Chennai’s rich heritage, our spaces reflect refined taste
          and lasting value. For those who seek not just a home but a legacy —
          Classy Villas is where sophistication resides.
        </p>
      </section>

      {/* COMPONENT SECTIONS */}
      <section>
        <VillaShowcase />
      </section>

      <section>
        <MansionShowcase />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <LastOne />
      </section>
    </>
  );
}
