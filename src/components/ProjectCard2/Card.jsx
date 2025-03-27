import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useMotionValue } from 'framer-motion';
import gsap from 'gsap';

const Card = ({pr}) => {
    const [ img1Hovered , setImg1Hovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const parRef = useRef();
    const hover1 = useRef();

    const handleMouseEnter1 = (e) => {
        setImg1Hovered(true);
        const bound = parRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - bound.left - 15);
        mouseY.set(e.clientY - bound.top - 15);

        gsap.to(hover1.current, {
            opacity : 1,
            x : mouseX.current,
            y : mouseY.current
        })
    }

    const handleMouseLeave1 = () => {
        setImg1Hovered(false);
        gsap.to(hover1.current, {
          opacity : 0,
        })
    }

    return (
        <Link className='h-fit w-fit' to={pr.link} >
            <div ref={hover1} className={`absolute z-[9] flex justify-center items-center rounded-full h-[2.5rem] w-[2.5rem] opacity-0 text-4xl bg-[#151414] p-2 text-white hover1 ${img1Hovered && "pointer-events-none"}`}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
            </div>
            <div onMouseMove={handleMouseEnter1} onMouseLeave={handleMouseLeave1} ref={parRef} className='h-[25rem] div1 bg-gradient-to-d from-black to-zinc-900 max-w-80 rounded-xl relative flex flex-col gap-4 border overflow-hidden p-4 cursor-pointer group border-zinc-500'>
                <div className='h-[15rem] duration-300 sm:h-[18rem] relative rounded-[5px] w-68 overflow-hidden'>
                    <img src={pr.img} className='object-cover duration-300 group-hover:h-full group-hover:w-full h-[110%] w-[120%]' alt="" />
                </div>
                <div className="relative">
                    <div className="name uppercase text-[1.4rem] font-bold text-zinc-200">
                        {pr.title}
                    </div>
                    <div className="description text-[1rem] relative text-zinc-600">
                        {pr.small_description}
                    </div>
                    <div className={`absolute top-0 right-0 flex justify-center items-center rounded-full h-[2.5rem] w-[2.5rem] text-4xl bg-[#151414] p-2 text-white`}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card