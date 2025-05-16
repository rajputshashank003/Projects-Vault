import React from 'react'
import { web3 } from '../../data'
import DesignTitle from './DesignTitle'
import DesignCard from "./DesignCard";
import { useNavigate } from 'react-router-dom';
import Magnet from '../Magnet/Magnet';

const WebThree = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen relative bg-gradient-to-t from-black to-zinc-900'>
            <div onClick={() => navigate("/")} className="absolute font-sans flex flex-row gap-2 justify-center items-center right-2 sm:right-10 top-2 sm:top-10 text-zinc-400 cursor-pointer z-[9999] hover:scale-125 duration-300 font-bold">
                <Magnet padding={50} disabled={false} magnetStrength={8}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="34"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-left-line"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h6v6h-6z" /><path d="M21 15v-6" /></svg>
                </Magnet>
            </div>
            <div className='min-h-screen justify-center items-center p-10 flex flex-wrap gap-10 bg-gradient-to-t from-zinc-950 to-zinc-900 w-full'>
                <div className="relative flex-wrap flex w-full justify-center items-center">
                    <Magnet padding={50} disabled={false} magnetStrength={20}>
                        <DesignTitle>
                            Web 3 Projects
                        </DesignTitle>
                    </Magnet>
                </div>
                {
                    web3.map( (data , ind) => (
                        <DesignCard pr={data} key={ind} />
                    ))
                }
            </div>
        </div>
    )
}

export default WebThree