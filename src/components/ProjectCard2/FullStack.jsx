import React from 'react'
import Card from './Card';
import { data , fullstack } from '../../data';
import DesignTitle from './DesignTitle';
import { useNavigate } from 'react-router-dom';
import Magnet from '../Magnet/Magnet';
import MotionImagesComponent from '../MotionImageGlsl/MotionImagesComponent.jsx'

const FullStack = () => {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen relative bg-gradient-to-t from-black to-zinc-900 max-sm:bg-gradient-to-b'>
            <div className="absolute right-4 flex-row flex gap-8 top-2">
                <Magnet padding={50} disabled={false} magnetStrength={8}>
                    <div onClick={() => navigate("/components")} className="relative font-sans flex flex-row gap-2 justify-center items-center text-xl text-zinc-400 cursor-pointer z-[9999] hover:scale-125 duration-300 font-bold">
                        Components 
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                    </div>
                </Magnet>
                <Magnet padding={50} disabled={false} magnetStrength={8}>
                    <div onClick={() => navigate("/designs")} className="relative font-sans flex flex-row gap-2 justify-center items-center text-xl text-zinc-400 cursor-pointer z-[9999] hover:scale-125 duration-300 font-bold">
                        Designs 
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                    </div>
                </Magnet>
                <Magnet padding={50} disabled={false} magnetStrength={8}>
                    <div onClick={() => navigate("/web3")} className="relative font-sans flex flex-row gap-2 justify-center items-center text-xl text-zinc-400 cursor-pointer z-[9999] hover:scale-125 duration-300 font-bold">
                        Web 3 
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                    </div>
                </Magnet>
            </div>
            <div className='min-h-screen justify-center items-center p-10 flex flex-wrap gap-10 bg-gradient-to-t from-zinc-950 to-zinc-900 w-full'>
                <div className="relative flex flex-wrap w-full justify-center items-center">
                    <Magnet padding={50} disabled={false} magnetStrength={20}>
                        <DesignTitle>
                            FullStack Projects
                        </DesignTitle>
                    </Magnet>
                </div>
                {fullstack.map( ind => (
                    <Card pr={data[ind]} key={ind} />
                ))}
            </div>
            <MotionImagesComponent/>
        </div>
    )
}

export default FullStack;