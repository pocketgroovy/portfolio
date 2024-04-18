import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header';

// import AboutMe from 'components/AboutMe'
// import Typewriter from 'components/Typewriter'
// import ModalButton from 'components/ModalButton'
// import ToolListMainPage from 'modal/ToolListMainPage'


const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))
const MyInfo = lazy(async () => import('pages/MyInfo'))

// const PREFERRED_IMAGE_WIDTH = 100
// const MOBILE_PADDING = 16
// const ASPECT_RATIO_WIDTH = 16
// const ASPECT_RATIO_HEIGHT = 9

// const imageWidth = Math.min(
// 	PREFERRED_IMAGE_WIDTH,
// 	window.innerWidth - MOBILE_PADDING
// )
// const imageHeight = imageWidth / (ASPECT_RATIO_WIDTH / ASPECT_RATIO_HEIGHT)

export default function App(): ReactElement {
	return (
		<div className="App">
			<Router>
				<Header />
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

		</div >
	);
}
