import React from 'react'
import { Link } from 'react-router-dom'

const DesignCard = ({ pr}) => {
    return (
        <Link to={pr.link} >
            <div className='h-60 w-60 relative rounded-xl cursor-pointer group overflow-hidden'>
                <img src={pr.img} className='group-hover:h-full group-hover:w-full h-[120%] w-[120%] object-cover duration-300' alt="" />
                <div className='bg-opacity-0 bg-gradient-to-b duration-300 from-transparent to-zinc-950 h-full w-full absolute -bottom-full group-hover:bottom-0'>
                    <div className="name absolute bottom-20 left-10 uppercase text-[1.2rem] font-bold text-zinc-200">
                        {pr.title}
                    </div>
                    <button className='h-[2rem] flex justify-center items-center gap-1 font-sans font-semibold rounded-md w-[6rem] absolute left-10 bottom-10 bg-gradient-to-b from-green-400 hover:to-zinc-900 to-zinc-700'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                        Visit Site
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default DesignCard