import LoadingOrError from 'components/LoadingOrError'
import { useEffect, useState, type ReactElement } from 'react'
import backgroundVideo from '../media/video/dutch-park-flower.mp4'
import { IProject } from 'types/iproject'
import getProjects from 'api/getProjects'
import Project from 'components/Project'

export default function Projects(): ReactElement {

	const [projects, setProjects] = useState<IProject[]>([])
	const [err, setErr] = useState<Error>()

	async function fetchProjects() {
		getProjects()
			.then(results => {
				// console.log('setting projects ' + results.data)
				setProjects(results.data)
			}
			)
			.catch(err => {
				setErr(err)
				console.log(err)
			}
			)
	}

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<div>
			<div className='py-5 botoom-0 h-full w-full bg-black bg-opacity-50'>

				<p className='font-ubuntu text-4xl text-center text-slate-300'>my sample projects </p>

				<video autoPlay loop muted id="bgVideo">
					<source src={backgroundVideo} type='video/mp4' />
				</video>
				<div className='m-5 grid grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-5 md:grid-cols-[repeat(1,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
					{projects ? (projects.map((project: IProject, index) => (
						<Project key={project._id} project={project} index={index} />
					))) :
						<LoadingOrError error={err} />}
				</div>
			</div>
		</div>
	)
}
