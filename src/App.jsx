import React, { useState } from 'react'
import ProjectsVault from './components/ProjectsVault'
import Footer from "./components/Footer"
import MotionImagesComponent from './components/MotionImageGlsl/MotionImagesComponent.jsx'
import Title from './components/Title.jsx'

export default function App() {
  
  return (
    <div className='relative w-[99.9%] overflow-hidden flex flex-col bg-neutral-900'>
      <Title/>
      <ProjectsVault/>
      <MotionImagesComponent/>
      <div className='flex justify-center items-center mb-4'>
        <Footer/>
      </div>
    </div>
  )
}
