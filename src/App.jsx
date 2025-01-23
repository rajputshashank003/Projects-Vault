import React, { useState } from 'react'
import ProjectsVault from './components/ProjectsVault'
import Footer from "./components/Footer"
import MotionImagesComponent from './components/MotionImageGlsl/MotionImagesComponent.jsx'
import Title from './components/Title.jsx'

export default function App() {
  
  return (
    <div className='relative p-1 bg-neutral-900'>
      <Title/>
      <ProjectsVault/>
      <MotionImagesComponent/>
      <div className='mb-4 mx-4'>
        <Footer/>
      </div>
    </div>
  )
}
