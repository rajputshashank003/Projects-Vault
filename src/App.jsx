import React, { useEffect, useState } from 'react'
import Footer from "./components/Footer"
// import MotionImagesComponent from './components/MotionImageGlsl/MotionImagesComponent.jsx'
import LocomotiveScroll from 'locomotive-scroll'
import { Route, Routes } from 'react-router-dom'
import FullStack from './components/ProjectCard2/FullStack.jsx'
import WebDesigns from './components/ProjectCard2/WebDesigns.jsx'
import WebThree from './components/ProjectCard2/WebThree.jsx'

export default function App() {
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className='relative w-[99.9%] flex flex-col bg-zinc-950'>
      <Routes>
        <Route path="/" element={<FullStack/>} />
        <Route path="/designs" element={<WebDesigns/>} />
        <Route path="/web3" element={<WebThree/>} />
      </Routes>
      {/* <MotionImagesComponent/> */}
      <div className='flex justify-center items-center mb-4'>
        <Footer/>
      </div>
    </div>
  )
}
