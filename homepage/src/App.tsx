import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header';


const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))
const MyInfo = lazy(async () => import('pages/MyInfo'))

export default function App(): ReactElement {
	return (
		<div className="App">
			<Router>
				<Header />
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path='/' element={<Gallery />} />
						<Route path=':fruitName' element={<Details />} />
						<Route path='/aboutMe' element={<MyInfo />} />
					</Routes>
				</Suspense>
			</Router>
		</div >
	);
}
