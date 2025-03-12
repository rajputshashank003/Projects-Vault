import React from 'react'
import Card from './Card'
import { data } from '../../data'

const ProjectCard = () => {
  return (
    <div className='h-screen w-full p-2 z-[9999999] sm:p-20'>
        <div className="text-4xl font-sans text-white font-bold m-4">
            Projects
        </div>
        <div className=" flex flex-row max-sm:pl-10 gap-8 w-full overflow-scroll no-scrollbar">
            {
                data.map( (d , ind) => (
                    <Card key={ind} data={d} />
                ))
            }
        </div>
    </div>
  )
}

export default ProjectCard