import React, { useEffect, useState } from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { AnimatePresence, motion } from "framer-motion";
import TypingEffect from './TypingEffect';
import {data} from "./data.js";
import { Link } from "react-router-dom";

function ReviewComponent() {
    const [active , setActive ] = useState(0);
    const handleNext = () => {
        setActive(next => (next + 1) % data.length);
    }
    const handlePrev = () => {
        setActive(prev => (prev - 1 + data.length) % data.length);
    }
    const randomRotate = () => Math.floor(Math.random() * 21) - 10;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                handlePrev();
            } else if (event.key === 'ArrowRight') {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='flex flex-col max-md:p-8 justify-center items-center min-h-screen h-fit bg-neutral-900'>
            <div className='w-[80%] grid grid-cols-2 max-md:flex max-md:flex-col gap-20 text-4xl '>
                <div className='col-span-1 relative h-80 w-full '>
                    <Link to={data[active].link ?? "/"}>
                        <AnimatePresence>
                        {
                            data.map((el, ind) => (
                            <motion.div
                            key={ind}
                            initial={{
                                opacity : 0,
                                scale : 0.9,
                                rotate : randomRotate(),
                                zIndex : -100,
                                y : 0
                            }}
                            animate={{
                                opacity : active == ind ? 1 : 0.7,
                                scale : active == ind ? 1 : 0.9,
                                rotate : active == ind ? 0 : randomRotate(),
                                zIndex : active == ind ? 9999 : ind,
                                y : active == ind ? [0, -80 , 0] : 0
                            }}
                            exit={{
                                opacity : 0,
                                rotate : randomRotate(),
                                scale : 0.9,
                                y : 0
                            }}
                            transition={{
                                duration : 0.4,
                                ease : "easeInOut"
                            }}
                            className='absolute w-full inset-0 origin-bottom '
                            >
                                <img src={el.img} className='rounded-xl object-cover h-72 max-md:h-52' />
                            </motion.div>
                            ))
                        }
                        </AnimatePresence>
                    </Link>
                </div>
                <div className='col-span-1 flex flex-col'>
                    <motion.div
                        key={active}
                        initial={{
                        opacity : 0,
                        y : -10
                        }}
                        animate={{
                        opacity : 1,
                        y : 0
                        }}
                        transition={{
                        delay : 0.4,
                        ease : "easeInOut"
                        }}
                    >
                        <Link to={data[active].link ?? "/"}>
                            <h2 className='text-bolder hover:scale-110 hover:font-bold duration-200 text-gray-300'>
                                {data[active].title}
                            </h2>
                            <div className=''>
                                <TypingEffect text={data[active].description}/>
                            </div>
                        </Link>
                        <div className='flex justify-center gap-16 w-full mt-10'>
                            <IconArrowLeft onClick={handlePrev} color='white' className="bg-gray-400 h-8 hover:scale-110 duration-150 w-8 p-1 rounded-full cursor-pointer" />
                            <IconArrowRight onClick={handleNext} color='white' className="bg-gray-400 h-8 hover:scale-110 duration-150 w-8 p-1 rounded-full cursor-pointer" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ReviewComponent
