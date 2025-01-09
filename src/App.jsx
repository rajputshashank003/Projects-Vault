import React, { useState } from 'react'
import ProjectsVault from './components/ProjectsVault'
import Footer from "./components/Footer"
import MotionImagesComponent from './components/MotionImageGlsl/MotionImagesComponent.jsx'

export default function App() {
  
  return (
    <div className='relative p-1 bg-neutral-900'>
      <ProjectsVault/>
      <MotionImagesComponent/>
      <div className='mb-4 mx-4'>
        <Footer/>
      </div>
    </div>
  )
}
