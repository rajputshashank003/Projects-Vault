import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    return (
        <Link to={data.link} className='h-[70vh] group min-w-56 rounded-xl relative cursor-pointer overflow-hidden duration-300 bg-green-600'>
            <div className="absolute h-full w-full bg-gradient-to-t from-slate-900 to-slate-100 duration-300 z-[9] opacity-0 group-hover:opacity-[0.4]"></div>
            <img src={data.img} className='object-cover z-[0] duration-300 group-hover:-translate-y-[5%] h-[75vh] w-full' alt="" />
            <div className="absolute h-1/2 w-full bottom-0 bg-gradient-to-t opacity-[0.7] from-black via-zinc-900 to-transparent duration-300 z-[9]"></div>
            <div className="absolute p-2 bottom-[0%] font-bold font-sans z-[999] text-3xl text-white">
                {data.title}
                <div className="relative tracking-wider opacity-0 group-hover:opacity-100 duration-300 font-semibold font-sans z-[999] text-sm text-neutral-400">
                    {data.description}
                </div>
            </div>
        </Link>
    )
}

export default Card