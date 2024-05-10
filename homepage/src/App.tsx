import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Services from 'pages/Services'

const Projects = lazy(async () => import('pages/Projects'))
const ProjectDetails = lazy(async () => import('pages/ProjectDetails'))
const InfoAboutMe = lazy(async () => import('pages/InfoAboutMe'))
const Experience = lazy(async () => import('pages/Experience'));
const Contacts = lazy(async () => import('pages/Contacts'));

export default function App(): ReactElement {
	return (
		<div className="App">
			<Router>
				<Header />
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path='/' element={<Projects />} />
						<Route path=':projectTitle' element={<ProjectDetails />} />
						<Route path='/aboutMe' element={<InfoAboutMe />} />
						<Route path='/experience' element={<Experience />} />
						<Route path='/service' element={<Services />} />
						<Route path='/contacts' element={<Contacts />} />
					</Routes>
				</Suspense>
			</Router>
		</div >
	);
}
