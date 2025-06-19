import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://th.bing.com/th/id/OIP.UabjAZfODlrFY3GwXSmxFwHaEo?w=1680&h=1050&rs=1&pid=ImgDetMain&cb=idpwebpc2",
  "https://wallpaperaccess.com/full/656693.jpg",
  "https://wallpaperaccess.com/full/2441903.jpg",
  "https://th.bing.com/th/id/OIP.IQzqvr7FNjK7wSxfJybd9wHaEo?w=2560&h=1600&rs=1&pid=ImgDetMain&cb=idpwebpc2",
  "https://th.bing.com/th/id/OIP.drLkKW7thcsFz7kr5J7m_wHaIt?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet&cb=idpwebpc2",
];

function Carousel() {
  return (
    <div className="relative px-4 py-8 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* 🔁 Ripple Video Background */}
      <video
        src="/assets/ripple effect.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />

      {/* Carousel Content Over Video */}
      <div className="relative z-10">
        <div className="carousel carousel-center bg-neutral rounded-box w-full space-x-4 overflow-x-auto flex p-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="carousel-item flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={src}
                alt={`img-${index}`}
                className="rounded-box w-full max-sm:w-40 max-sm:h-40 md:w-80 lg:w-96 max-w-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Status Indicators */}
        <div className="flex justify-center items-center text-white gap-2 sm:gap-4 p-4 text-xs sm:text-lg">
          <div aria-label="status" className="status status-xs"></div>
          <div aria-label="status" className="status status-sm"></div>
          <div aria-label="status" className="status status-md"></div>
          <div aria-label="status" className="status status-lg"></div>
          <div aria-label="status" className="status status-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
