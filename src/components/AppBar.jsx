import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { menu } from '../utils/menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const AppBar = () => {
    const navigate = useNavigate();
    const par = useRef(null);

    return (
        <div ref={par} className='sm:mx-[5%] max-sm:mx-[8px] h-[42px] md:h-[62px] shadow-[0px_0px_4px] shadow-red-800/30 sticky top-[32px] sm:top-[12px] z-[999] rounded-[12px] overflow-hidden'>
            <div className="absolute top-0 left-0 h-[80%] w-12 bg-red-700"></div>
            <div className='h-full px-[12px] md:px-[22px] items-center bg-black/30 backdrop-blur-[32px] flex flex-row space-around gap-[10px] md:gap-[42px] sm:gap-[22px] '>
                {menu.map((val) => (
                    <Text onClick={() => navigate(val.link)} key={val} >{val.label}</Text>
                ))}
            </div>
        </div>
    )
}

const Text = ({children, onClick}) => {
    return (
        <div onClick={onClick} style={{ fontFamily: 'f3, sans-serif'}} className='text-[11px] sm:text-[22px] cursor-pointer md:text-[32px] text-white'>
            {children}
        </div>
    )
}

export default AppBar