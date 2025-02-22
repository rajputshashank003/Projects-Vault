import React, { useEffect, useRef } from 'react'
import MotionImages from './MotionImages.js';
import { Link } from 'react-router-dom';

const MotionImagesComponent = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let motionImages;
        if (containerRef.current) {
            motionImages = new MotionImages({ dom: containerRef.current });
            return () => {
                if (motionImages) {
                    motionImages.renderer.dispose();
                    containerRef.current.removeChild(motionImages.renderer.domElement);
                }
            };
        }
    }, []);

    return (
        <div className='min-h-screen mb-2 overflow-hidden max-w-screen relative text-4xl max-sm:flex max-sm:flex-col grid grid-cols-2 text-white p-4'>
            <div ref={containerRef} className='relative flex justify-center items-center col-span-1 h-screen max-sm:h-[20rem]'>
                <div className='images opacity-0 absolute w-[31vw] h-[24vw] max-sm:h-[30rem] max-sm:w-[40rem] '>
                    <img className='absolute opacity-0 h-full w-full object-cover' src="/ratsi.png" alt="" />
                    <img className='absolute opacity-0 h-full w-full object-cover' src="/Foodybro.png" alt="" />
                    <img className='absolute opacity-0 h-full w-full object-cover' src="/elasticgsap.png" alt="" />
                    <img className='absolute opacity-0 h-full w-full object-cover' src="/chessv.png" alt="" />
                </div>
            </div>
            <div className="links col-span-1 w-full flex justify-center items-start flex-col gap-10">
                <Link to="" className='transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-6xl max-sm:text-5xl tracking-normal'>
                    <small className='sm:text-xl text-lg mx-2'>01.</small>
                    Ratsi - AI Tutor
                </Link>
                <Link to="" className='transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-6xl max-sm:text-5xl tracking-normal'>
                    <small className='sm:text-xl text-lg mx-2'>02.</small>
                    FoodyBro
                </Link>
                <Link to="" className='transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-6xl max-sm:text-5xl tracking-normal'>
                    <small className='sm:text-xl text-lg mx-2'>03.</small>
                    Elastic - gsap
                </Link>
                <Link to="" className='transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-6xl max-sm:text-5xl tracking-normal'>
                    <small className='sm:text-xl text-lg mx-2'>04.</small>
                    ChessV 
                </Link>
            </div>
        </div>
    );
}

export default MotionImagesComponent;
