import React from 'react'
import Navbar from '../COMPONENTS/COMMON/Navbar'
import SearchPage from './SearchPage'
import Footer from '../COMPONENTS/COMMON/Footer'
import Shipping from '../COMPONENTS/COMMON/Shipping'

const Search = () => {
  return (
    <>
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

        <SearchPage/>
        {/* <Shipping/> */}
        {/* <Footer/> */}
        
    </>
  )
}

export default Search
