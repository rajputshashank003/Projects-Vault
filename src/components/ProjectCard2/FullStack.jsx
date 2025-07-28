import React from 'react'
import Card from './Card';
import { fullstack } from '../../data';
import DesignTitle from './DesignTitle';
import { useNavigate } from 'react-router-dom';
import Magnet from '../Magnet/Magnet';
import MotionImagesComponent from '../MotionImageGlsl/MotionImagesComponent.jsx'

const FullStack = () => {

    return (
        <div className='min-h-screen relative max-sm:bg-gradient-to-b'>
            <div className='min-h-screen justify-center items-center p-10 flex flex-wrap gap-10 bg-gradient-to-t from-zinc-950 to-zinc-900 w-full'>
                <div className="relative flex flex-wrap w-full justify-center items-center">
                    <Magnet padding={50} disabled={false} magnetStrength={20}>
                        <DesignTitle>
                            FullStack Projects
                        </DesignTitle>
                    </Magnet>
                </div>
                {fullstack.map( (data, ind) => (
                    <Card pr={data} key={ind} />
                ))}
            </div>
            <MotionImagesComponent/>
        </div>
    )
}

export default FullStack;