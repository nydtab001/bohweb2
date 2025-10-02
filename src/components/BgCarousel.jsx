import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

function BgCarousel({ slides, children }) {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const previousSlide = () => {
        if (currentIndex === 0) setCurrentIndex(slides.length - 1);
        else setCurrentIndex(currentIndex - 1);
        resetAutoplay();
    }

    const nextSlide = () => {
        if (currentIndex === slides.length - 1) setCurrentIndex(0);
        else setCurrentIndex(currentIndex + 1);
        resetAutoplay();
    }

    useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, 10000); // Change every 5 seconds

  return () => clearInterval(interval); // Cleanup on unmount
}, [slides.length]);


    return (
        <div className="relative w-full h-full">
        <div className={`w-full h-full relative transition ease-in ease-out duration-500`}
        // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {slides.map((slide, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                <img
                    src={slide.src}
                    alt={slide.alt}
                    key={index}
                    className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-2000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    loading="eager"
                    decoding="async"
                />
                <AnimatePresence>
  {index === currentIndex && (
    <motion.div
      key={slide.h1} // ensures unique animation per slide
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
      className="absolute inset-0 h-full w-full flex flex-col justify-center items-center text-center px-4 z-50"
    >
      <h1 className={slide.h1style}>
        {slide.h1}
      </h1>
      <p className={slide.pstyle}>
        {slide.p}
      </p>
      <div className="mt-6 z-50">
          {index==0 && (
    <motion.button
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }}
    exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
    onClick={() => navigate("/media/sermons")}
    className="bg-white/60 text-gray-700 max-sm:hidden max-sm:text-sm px-6 z-50 py-3 font-semibold rounded-full border-none shadow transition-colors duration-200 hover:bg-white hover:text-gray-800 mt-6"
  >
    Listen to Sermons
  </motion.button>
  )
  }
      </div>
    </motion.div>
  )}
</AnimatePresence>
                </div>
            ))}
            {children}
        </div>
        <div className="absolute top-1/2 w-full items-center flex justify-between px-4 md:text-4xl max-sm:text-2xl text-3xl text-black/50 z-50 pointer-events-auto">
        <button onClick={previousSlide} className="bg-white/50 rounded-full border-none hover:text-black/80 transition">
            <FaArrowCircleLeft/>
        </button>
        <button onClick={nextSlide} className="bg-white/50 rounded-full border-none hover:text-black/80 transition">
            <FaArrowCircleRight />
        </button>
        </div>
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-50">
           {slides.map((s,i) => (
            <div key={i} onClick={() => setCurrentIndex(i)} className={`max-sm:h-3 max-sm:w-3 h-5 w-5 rounded-full cursor-pointer ${i===currentIndex ? 'bg-white' : 'bg-gray-600'}`}></div>
           ))}
        </div>
        </div>
    );
}

export default BgCarousel;