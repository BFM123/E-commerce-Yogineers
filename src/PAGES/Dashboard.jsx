import React from "react";
import Navbar from "../COMPONENTS/COMMON/Navbar";
import Footer from "../COMPONENTS/COMMON/Footer";
import HeroSection from "../COMPONENTS/DashboardComponents/HeroSection";
import Shipping from "../COMPONENTS/COMMON/Shipping";
import Carousel from "../COMPONENTS/COMMON/Carousel";
import Carousel1 from "../COMPONENTS/COMMON/Carousel1";
import Explore from "../COMPONENTS/DashboardComponents/Explore";

const Dashboard = () => {

  const items = [
    { id: 1, title: "First Card", content: "Content for first card" },
    { id: 2, title: "Second Card", content: "Content for second card" },
    { id: 3, title: "Third Card", content: "Content for third card" }
  ];

  return (
    <>
      <div className="relative z-20">
        {/* 🔒 Background Video */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <Navbar />
        <Explore/>
        <div className="h-130"></div>
        <Carousel/>
        <Carousel1/>
        <Shipping/>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
