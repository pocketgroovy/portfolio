import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import backgroundVideo from './media/video/samplevideo.mp4'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	return (
		<div className="App">
			<header id='toppage-header'>
			<h1 className ='text-center font-name' > Yoshi Miyamoto</h1>
			<span className='welcome' > welcome to my portfolio</span>
			</header>
			<div className='contents'>
			<video autoPlay loop muted id='video'>
				<source src={backgroundVideo} type='video/mp4'/>
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
	)
}
