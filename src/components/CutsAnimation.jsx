import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react';
import { useGSAP } from '@gsap/react';
import { data } from '../data';

gsap.registerPlugin(ScrollTrigger);

const CutsAnimation = () => {
    useGSAP(() => {
        gsap.to(".cuts_animation_box", {
            scrollTrigger: {
                trigger: ".cuts_animation_main",
                start: "top 0%",
                end: "top -80%",
                scroller :"body",
                pin: true,
            }
        });
        const gtl = gsap.timeline();
        let index = 0;

        gtl.to({}, {
            duration: 0.1,  // Change image every 0.5 seconds
            repeat: 15,     // Loop infinitely
            onRepeat: () => {
                const imgElement = document.querySelector(".small_changing_img");
                if (imgElement) {
                    imgElement.src = data[index].img; // Update image source
                    index = (index + 1) % data.length; // Cycle through images
                }
            },
            onComplete : () => {
                const imgElement = document.querySelector(".small_changing_img");
                if (imgElement) {
                    imgElement.src = "/wall.jpg";
                }
            },
        })
        .to(".small_changing_img", {
            borderRadius : 0
        }, "size_inc_img")
        .to(".small_changing_img_par", {
            height: "100vh",
            width: "100vw",  // Ensuring full expansion
            top: "50%",
            left: "50%",
            duration: 1.5,
            ease: "power2.out"
        }, "size_inc_img")
        .to(".project_name_", {
            opacity : 1,
            duration : 1,
        }, "size_inc_img")
        .to(".project_name_c1", {
            top : 0,
            duration : 1,
        }, "size_inc_img")
        .from(".val", {
            x : -260,
            border: 0,
            scrollTrigger: {    
                trigger: ".cuts_animation_box",
                start : "top -10%",
                end : "top -100%",
                scrub: 1,
            },
            stagger : 0.05
        })
        .to(".project_name_c1", {
            opacity : 0.8, 
            scrollTrigger: {    
                trigger: ".cuts_animation_box",
                start : "top -10%",
                end : "top -120%",
                scrub: 1,
            },
        })
        ;
    });

    return (
        <div className="cuts_animation_main relative object-cover h-screen w-screen ">
            <div className='absolute top-1/2 left-1/2 project_name_ z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-0 text-[2rem] sm:text-[6rem] md:text-[10rem] text-zinc-300'>
                <div data-scroll data-scroll-speed=".2" className='relative h-screen p-2 w-screen flex justify-center items-center project_name_c1 top-[20rem] font-bold tracking-[1rem]'>
                    PROJECT'S VAULT
                </div>
            </div>
            <div className='absolute h-[10rem] w-[10rem] rounded-xl z-[99] small_changing_img_par backdrop-blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img src="/1airbnb.png" className='h-full small_changing_img w-full rounded-xl object-cover' alt="" />
            </div>
            <div className='hl1 absolute w h-screen border right-1/2 z-[9]'></div>
            <div className='cuts_animation_box absolute grid bg-zinc-950 grid-cols-6 h-fit w-screen'>
                {
                    [1,2,3,4,5,6].map( (val) => (
                        <div key={val} className={'overflow-hidden z-[999] h-screen w-full relative col-span-1 '}>
                            <div className={'border-r-2 border-white h-screen relative bg-zinc-950 w-full val'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CutsAnimation;