import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import backgroundVideo from './media/video/samplevideo.mp4'
import AboutMe from 'components/AboutMe'
import Typewriter from 'components/Typewriter'
import ModalButton from 'components/ModalButton'
import MainTech from 'modal/maintech'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))


export default function App(): ReactElement {
	return (
		<div className="App">
			<header id='toppage-header'>
				<div className='col-span-3 bg-clip-boarder bg-gradient-to-r from-pink-400 to-violet-500'>
				<h1 className='font-pacifico p-2 text-center bg-clip-text text-transparent bg-gradient-to-l from-green-300 to-red-300'><span className='text-black font-mono text-lg text-left' > welcome to</span> Yoshi Miyamoto <span className='text-black font-mono text-lg text-left' > homepage</span> </h1>
				</div>
				<div className='m-1 grid grid-cols-[repeat(5,384px)] place-content-left' >
					<div><AboutMe /></div>
					<Typewriter typingText='Thank you for stopping by to check out my portfolios!!' textStyle='font-jerseycharted text-5xl leading-normal text-center break-normal col-span-3' typingSpeed={100} />
					<ModalButton><MainTech/></ModalButton>
				</div>
			</header>

			<div className='contents'>
			<p className='font-bebas m-3 text-3xl text-center '>↓↓ Click the following cards to see my sample projects! </p>
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
