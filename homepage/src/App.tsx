import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from 'components/AboutMe'
import Typewriter from 'components/Typewriter'
import ModalButton from 'components/ModalButton'
import ToolListMainPage from 'modal/ToolListMainPage'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))
const MyInfo = lazy(async () => import('pages/MyInfo'))


export default function App(): ReactElement {
	return (
		<div className="App">
			<Router>
				<header id='toppage-header'>
					<div className='col-span-3 bg-clip-boarder bg-gradient-to-r from-pink-400 to-violet-500'>
						<h1 className='font-pacifico p-2 text-center bg-clip-text text-transparent bg-gradient-to-l from-green-300 to-red-300'><span className='text-black font-mono text-lg text-left' > welcome to</span> Yoshi Miyamoto <span className='text-black font-mono text-lg text-left' > homepage</span> </h1>
					</div>
					<div className='grid grid-flow-col grid-cols-4' >
						<div><AboutMe />						
						</div>
						<Typewriter typingText='Thank you for stopping by to check out my portfolios!!' textStyle='font-jerseycharted flex text-5xl leading-normal text-center break-normal col-span-2' typingSpeed={100} />
						<ModalButton><ToolListMainPage /></ModalButton>
					</div>
				</header>
				<div className='contents'>
					<Suspense fallback={<LoadingOrError />}>
						<Routes>
							<Route path='/' element={<Gallery />} />
							<Route path=':fruitName' element={<Details />} />
							<Route path='/aboutMe' element={<MyInfo />} />
						</Routes>
					</Suspense>
				</div>
			</Router>

		</div>
	);
}
