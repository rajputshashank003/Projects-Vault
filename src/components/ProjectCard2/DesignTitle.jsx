import React from 'react'

const DesignTitle = ({children}) => {
  return (
    <div className='bg-gradient-to-b from-green-300 via-green-400 font-sans bg-clip-text to-green-950 h-fit px-4 py-2 mt-4 rounded-xl w-fit uppercase text-transparent font-bold text-[3rem] '>
        {children}
    </div>
  )
}

export default DesignTitle