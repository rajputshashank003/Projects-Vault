import React, { useState } from 'react'
import ReviewComponent from './ReviewComponent'
import Footer from "./Footer"

export default function App() {
  
  return (
    <div className='relative p-1 bg-neutral-900'>
      <ReviewComponent/>
      <div className='mb-4 mx-4'>
        <Footer/>
      </div>
    </div>
  )
}
