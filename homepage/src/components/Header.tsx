import type { ReactElement } from 'react';
import AboutMe from './AboutMe';
import Typewriter from './Typewriter';
import ModalButton from './ModalButton';
import ToolListMainPage from 'modal/ToolListMainPage';


export default function Header(): ReactElement{
    return (
        <header id='toppage-header'>
        <div className='absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-current text-black text-opacity-30' />
            <div className='col-span-3 bg-clip-boarder bg-gradient-to-r from-pink-400 to-violet-500'>
                <h1 className='font-pacifico p-2 text-center bg-clip-text text-transparent bg-gradient-to-l from-green-300 to-red-300'><span className='text-black font-mono text-lg text-left' > welcome to</span> Yoshi Miyamoto <span className='text-black font-mono text-lg text-left' > homepage</span> </h1>
            </div>
            <div className='grid grid-flow-col grid-cols-4 bg-bamboo-pattern' >
                <div><AboutMe />
                </div>
                <Typewriter typingText='Thank you for stopping by to check out my portfolios!!' textStyle='font-jerseycharted flex text-7xl text-indigo-900 leading-normal text-center break-normal col-span-2' typingSpeed={100} />
                <ModalButton><ToolListMainPage /></ModalButton>
            </div>
        </header>);
}