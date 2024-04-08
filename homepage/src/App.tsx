import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import backgroundVideo from './video/samplevideo.mp4'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	return (
		<div className="App">
			<header className="App-header">
			<h1 className ='font-name' > Yoshi Miyamoto</h1>
			<h3 className='welcome' > welcome to my portfolio</h3>
			</header>
			<div className='contents'>
			<video autoPlay loop muted id='video'>
				<source src={backgroundVideo} type='video/mp4'/>
			</video>
			<BrowserRouter>
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path='/' element={<Gallery />} />
						<Route path=':fruitName' element={<Details />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			</div>
		</div>
	)
}
