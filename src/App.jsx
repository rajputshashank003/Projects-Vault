import React, { useEffect, useState } from 'react'
import ProjectsVault from './components/ProjectsVault'
import Footer from "./components/Footer"
import MotionImagesComponent from './components/MotionImageGlsl/MotionImagesComponent.jsx'
import CutsAnimation from './components/CutsAnimation.jsx'
import ProjectsAnimation from './components/ProjectsAnimation.jsx'
import LocomotiveScroll from 'locomotive-scroll'

export default function App() {
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className='relative w-[99.9%] overflow-hidden flex flex-col bg-zinc-950'>
      <div className='relative '>
        <CutsAnimation/>
      </div>
      <div className='relative'>
        <ProjectsAnimation/>
      </div>
      <div className='relative'>
        <ProjectsVault/>
      </div>
      <MotionImagesComponent/>
      <div className='flex justify-center items-center mb-4'>
        <Footer/>
      </div>
    </div>
  )
}
