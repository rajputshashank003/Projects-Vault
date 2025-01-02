import React, { useState } from 'react'
import ProjectsVault from './ProjectsVault'
import Footer from "./Footer"

export default function App() {
  
  return (
    <div className='relative p-1 bg-neutral-900'>
      <ProjectsVault/>
      <div className='mb-4 mx-4'>
        <Footer/>
      </div>
    </div>
  )
}
