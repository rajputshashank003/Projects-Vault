import React, { useEffect, useState } from 'react'
import Footer from "./components/Footer"
import MotionImagesComponent from './components/MotionImageGlsl/MotionImagesComponent.jsx'
import LocomotiveScroll from 'locomotive-scroll'
import { Route, Routes } from 'react-router-dom'
import AllCards1 from './components/ProjectCard2/AllCards1.jsx'
import AllCards2 from './components/ProjectCard2/AllCards2.jsx'

export default function App() {
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className='relative w-[99.9%] flex flex-col bg-zinc-950'>
      <Routes>
        <Route path="/" element={<AllCards1/>} />
        <Route path="/designs" element={<AllCards2/>} />
      </Routes>
      <MotionImagesComponent/>
      <div className='flex justify-center items-center mb-4'>
        <Footer/>
      </div>
    </div>
  )
}
