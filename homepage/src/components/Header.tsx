import type { ReactElement } from 'react';
import AboutMe from './AboutMe';
import Typewriter from './Typewriter';
import ModalButton from './ModalButton';
import ToolListMainPage from 'modal/ToolListMainPage';
import AboutMeTab from './AboutMeTab';


export default function Header(): ReactElement {
    return (
        <header id='toppage-header'>
            <div className='absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-current text-black text-opacity-50' />
            {/* <div className='col-span-3 bg-clip-boarder bg-gradient-to-r from-pink-400 to-violet-500'> */}
            <div className='col-span-3 bg-clip-boarder bg-gradient-to-r from-blue-200 to-lime-300'>
                <Typewriter typingText='Thank you for stopping by to check out my portfolios!!' textStyle='font-jerseycharted text-3xl text-indigo-900 leading-normal text-center break-normal col-span-2' typingSpeed={100} />
            </div>
            <div className='grid grid-flow-col grid-cols-5 bg-bamboo-pattern min-h-48' >
                <div>
                    <AboutMe />
                </div>
                <div className='absolute mt-[8rem]'>
                    <AboutMeTab />
                </div>
                <div className='text-center col-span-3'>
                    <p className='font-jersey25  text-5xl'> welcome!! </p>
                    <h1 className='m-3 py-6 font-pacifico text-6xl bg-clip-text text-transparent bg-gradient-to-l from-green-300 to-red-100  drop-shadow'>I am Yoshi Miyamoto </h1>
                    <p className='font-comfortaa bg-lime-300 rounded-full p-px bg-gradient-to-b from-gray-100 to-transparent md:text-3xl sm: text-base '>Application Developer / Backend / Infra Engineer</p>
                </div>
                <ModalButton><ToolListMainPage /></ModalButton>

            </div>
        </header>);
}