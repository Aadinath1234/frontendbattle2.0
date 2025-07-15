import React, { useEffect, useRef, useState } from "react";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import CustomerSection from "./components/CustomerSection/CustomerSection";
import Carousel from "./components/Carousel/Carousel";
import Parallex from "./components/Parallex/Parallex";
import Showcase from "./components/showcase/showcase";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import PopupModal from "./components/PopupModal/PopupModal";

function App() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(true); 
  const [popupContent, setPopupContent]= useState({
       type: "image", 
       src: "/assets/Ads.png", 
       text: "Welcome to our landing page ! ",
        
  }); 



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // fallback
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setLoading(false); 
    setShowModal(true); 
  };

  return (
    <div className="min-h-screen bg-white  text-black dark:bg-black dark:text-white transition-colors duration-300">
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            ref={videoRef}
            src="/assets/loader.mp4"
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <PopupModal
            isOpen={showModal} 
            onClose={() => setShowModal(false)} 
            content={popupContent} 
            className="w-full h-full object-contain rounded-2xl"
           
           />
          <div id="home">
            <Homepage />
          </div>
          <div id="customers">
            <CustomerSection />
          </div>
          <div id="carousel">
            <Carousel />
          </div>
          <div id="parallax">
            <Parallex />
          </div>
          <div id="showcase">
            <Showcase />
          </div>
          <div id="stats">
            <Stats />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
