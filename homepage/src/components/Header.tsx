import type { ReactElement } from 'react';
import AboutMe from './AboutMe';
import Typewriter from './Typewriter';
import ModalButton from './ModalButton';
import ToolListMainPage from 'modal/ToolListMainPage';


export default function Header(): ReactElement {
    return (
        <header id='toppage-header'>
            <div className='absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-current text-black text-opacity-50' />
            <div className='col-span-3 bg-clip-boarder bg-gradient-to-r from-pink-400 to-violet-500'>
                <Typewriter typingText='Thank you for stopping by to check out my portfolios!!' textStyle='font-jerseycharted text-3xl text-indigo-900 leading-normal text-center break-normal col-span-2' typingSpeed={100} />
            </div>
            <div className='grid grid-flow-col grid-cols-4 bg-bamboo-pattern min-h-48' >
                <div><AboutMe />
                </div>
                <div className='text-center text-black font-mono text-lg col-span-2'>
                    <p> welcome!! </p> <h1 className='m-5 py-6 font-pacifico text-6xl bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-red-200  drop-shadow'>I am Yoshi Miyamoto </h1>
                    <p>Software / Backend / Infra Engineer</p>
                </div>
                <ModalButton><ToolListMainPage /></ModalButton>

            </div>
        </header>);
}