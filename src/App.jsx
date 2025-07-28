import React, { useEffect } from 'react'
import Footer from "./components/Footer"
import RoutesComponent from './components/RoutesComponent'
import AppBar from './components/AppBar'
import { BrowserRouter } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'

export default function App() {
    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();
        return () => locomotiveScroll.destroy();
    }, []);
    return (
        <BrowserRouter>
            <div className='relative w-full py-[32px] flex flex-col bg-gradient-to-t from-black to-zinc-900'>
                <div className='flex flex-col w-full justify-center items-center mb-4'>
                    <AppBar />
                    <RoutesComponent />
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}
