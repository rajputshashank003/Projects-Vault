import React, { useEffect, useState } from 'react'
import Footer from "./components/Footer"
import LocomotiveScroll from 'locomotive-scroll'
import { Route, Routes } from 'react-router-dom'
import FullStack from './components/ProjectCard2/FullStack.jsx'
import WebDesigns from './components/ProjectCard2/WebDesigns.jsx'
import WebThree from './components/ProjectCard2/WebThree.jsx'
import ComponentDesigns from './components/ProjectCard2/ComponentDesigns.jsx'

export default function App() {
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <div className='relative w-[99.9%] flex flex-col bg-zinc-950'>
      <Routes>
        <Route path="/" element={<FullStack/>} />
        <Route path="/designs" element={<WebDesigns/>} />
        <Route path="/web3" element={<WebThree/>} />
        <Route path="/components" element={<ComponentDesigns/>} />
      </Routes>
      <div className='flex justify-center items-center mb-4'>
        <Footer/>
      </div>
    </div>
  )
}
