import React from 'react'
import Card from './Card';
import { fullstack } from '../../data';
// import MotionImagesComponent from '../MotionImageGlsl/MotionImagesComponent.jsx'

const FullStack = () => {

    return (
        <div className='min-h-screen w-full relative max-sm:bg-gradient-to-b'>
            <div style={{ fontFamily: 'f1, serif'}} className="text-[42px] text-center mt-4 text-white md:text-[62px]">
                Full Stack
            </div>
            <div className='min-h-screen justify-center items-center p-10 flex flex-wrap gap-10 w-full'>
                {fullstack.map( (data, ind) => (
                    <Card pr={data} key={ind} />
                ))}
            </div>
            {/* <MotionImagesComponent/> */}
        </div>
    )
}

export default FullStack;