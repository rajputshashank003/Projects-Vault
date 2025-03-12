import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react';
import { useGSAP } from '@gsap/react';
import { data } from '../data';
import { Link, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ProjectsAnimation = () => {

    const navigate = useNavigate();
    
    const ind_1 = 1;
    const ind_2 = 7;
    const ind_3 = 4;

    useGSAP(() => {
        gsap.to(".projects_animation_box", {
            scrollTrigger: {
                trigger: ".projects_animation_main",
                start: "top 0%",
                end: "top -300%",
                scroller :"body",
            }
        });
        gsap.to(".img_" + ind_1 + "_text", {
            top : 0,
            left : 0,
            opacity : 1,
            scrollTrigger: {
                trigger: ".projects_animation_main",
                start: "top " + 80 + "%",
                end: "top -" + 10 + "%",
                scrub : 2,
            }
        });
        gsap.to(".img_" + ind_2 + "_text", {
            top : 0,
            left : 0,
            opacity : 1,
            scrollTrigger: {
                trigger: ".projects_animation_main",
                start: "top -" + 50 + "%",
                end: "top -" + 120 + "%",
                scrub : 2,
            }
        });
        gsap.to(".img_" + ind_3 + "_text", {
            top : 0,
            left : 0,
            opacity : 1,
            scrollTrigger: {
                trigger: ".projects_animation_main",
                start: "top -" + 100 + "%",
                end: "top -" + 180 + "%",
                scrub : 2,
            }
        })

        const gtl = gsap.timeline();
        gtl.to(".side_bar", {
            right: "0px",
            scrollTrigger: {
                trigger: ".projects_animation_main",
                start: "top 30%",
                end : "top 0%",
                scrub : true,
            },
        })
        .to(".side_bar", {
            position: "fixed",
            scrollTrigger: {
                trigger: ".projects_animation_main",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        })
        .to(".side_bar", {
            x: "160%",
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".projects_animation_main",
                start: "top -240%",
                end : "top -290%",
                scrub : 2,
            },
        })
        
    });
    
    return (
    <div className='relative'>
        <div className="absolute h-screen side_bar rounded-xl rounded-tr-none rounded-br-none w-16 max-sm:w-12 top-0 flex flex-col justify-center items-center px-4 font-bold text-3xl -right-20 bg-yellow-400 z-[99999]">
            P R O J E C T S
        </div>
        <div className="relative  z-[9999] rounded-t-2xl w-screen projects_animation_main">
            <div className='projects_animation_box relative'>
                <Link to={data[ind_1].link}>
                    <div data-scroll data-scroll-speed="-.1" className='shadow-[0px_-2px_5px_rgba(255,255,255,0.5)] rounded-t-[2rem] overflow-hidden relative h-screen w-[screen]'>
                        <img className='h-full relative w-full object-cover' src={data[ind_1].img} alt="" />
                        <div className={'absolute opacity-1 p-2 h-fit w-fit backdrop-blur-[1px] img_' + ind_1 + '_text bottom-0 right-0 text-[4rem] max-sm:text-[2rem] text-white font-bold'}>
                            {data[ind_1].title} 
                            <div className="text-[1rem] max-sm:hidden max-sm:text-[1rem]  bg-zinc-400 p-4 rounded-xl bg-opacity-[0.7] text-zinc-800 w-1/2">
                                {data[ind_1].description}
                            </div>
                            <div className="text-[1rem] sm:hidden max-sm:text-[1rem]  bg-zinc-400 p-4 rounded-xl bg-opacity-[0.7] text-zinc-800 w-1/2">
                                Web app to swap crypto coins like USTC to solana etc.
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={data[ind_2].link}>
                    <div data-scroll data-scroll-speed=".2" className='shadow-[0px_-2px_5px_rgba(255,255,255,0.5)] rounded-t-[2rem] overflow-hidden relative h-screen w-[screen]'>
                        <img className='h-full relative w-full object-cover' src={data[ind_2].img} alt="" />
                        <div className={'absolute opacity-1 h-fit p-2 w-1/2 backdrop-blur-[1px] img_' + ind_2 + '_text bottom-0  right-0 text-[4rem] max-sm:text-[2rem] text-zinc-900 font-bold'}>
                            {data[ind_2].title} 
                            <div className="text-[1rem] max-sm:hidden max-sm:text-[1rem] bg-zinc-800 p-4 rounded-xl bg-opacity-[0.7] text-zinc-200">
                                {data[ind_2].description}
                            </div>
                            <div className="text-[1rem] sm:hidden max-sm:text-[1rem] bg-zinc-800 p-4 rounded-xl bg-opacity-[0.7] text-zinc-200">
                                Food ordering web application from selection to ordering food and can use Solana to pay bills.
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={data[ind_3].link}>
                    <div data-scroll data-scroll-speed="-.1" className='shadow-[0px_-2px_5px_rgba(255,255,255,0.5)] rounded-t-[2rem] overflow-hidden relative h-screen w-[screen]'>
                        <img className='h-full relative w-full object-cover' src={data[ind_3].img} alt="" />
                        <div className={'absolute opacity-1 h-fit p-2 w-fit backdrop-blur-[1px] img_' + ind_3 + '_text bottom-0 right-0 text-[4rem] max-sm:text-[2rem] text-white font-bold'}>
                            {data[ind_3].title} 
                            <div className="text-[1rem] max-sm:hidden max-sm:text-[1rem]  bg-zinc-400 p-4 rounded-xl bg-opacity-[0.7] text-zinc-800 text-zinc-400 w-1/2">
                                {data[ind_3].description}
                            </div>
                            <div className="text-[1rem] sm:hidden max-sm:text-[1rem]  bg-zinc-400 p-4 rounded-xl bg-opacity-[0.7] text-zinc-800 text-zinc-400 w-1/2">
                                Play chess game, can connect with opponent with audio and video call, can play bet games using cryto.
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default ProjectsAnimation