import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import backgroundVideo from './media/video/samplevideo.mp4'
import AboutMe from 'components/AboutMe'
import Typewriter from 'components/Typewriter'
import ModalInfo from 'components/ModalButton'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))


export default function App(): ReactElement {
	return (
		<div className="App">
			<header id='toppage-header'>
				<div className='col-span-3 bg-clip-boarder bg-gradient-to-r from-pink-400 to-violet-500'>
				<h1 className='font-pacifico p-2 text-center bg-clip-text text-transparent bg-gradient-to-l from-green-300 to-red-300'> Yoshi Miyamoto</h1>
				<span className='col-span-5 font-mono text-center' > welcome to my portfolio</span></div>
				<div className='m-1 grid grid-cols-[repeat(5,384px)] place-content-left' >
					<div className='text-left bg-clip-text bg-green-500'><AboutMe /></div>
					<Typewriter typingText='Thank you for stopping by to check out my portfolio!!' textStyle='font-jerseycharted text-7 xl leading-normal text-center break-normal col-span-3' typingSpeed={100} />
					<ModalInfo />
					<Typewriter typingText='Please click me to read about me!' textStyle='font-bebas text-2xl text-center break-normal ' typingSpeed={1}/>
				</div>
			</header>

			<div className='contents'>
			<p className='font-braah m-3 text-5xl text-center  col-span-3'>↓↓ Click the following cards to see my sample projects! </p>
				<video autoPlay loop muted >
					<source src={backgroundVideo} type='video/mp4' />
				</video>
				<Router>
					<Suspense fallback={<LoadingOrError />}>
						<Routes>
							<Route path='/' element={<Gallery />} />
							<Route path=':fruitName' element={<Details />} />
						</Routes>
					</Suspense>
				</Router>
			</div>
		</div>
	);
}
