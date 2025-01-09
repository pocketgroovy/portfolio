import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import backgroundVideo from '../media/video/dutch-park-flower.mp4'
import type { IProject } from 'types/iproject'
import Project from 'components/Project'
import { useQuery } from '@tanstack/react-query'
import getProjects from 'api/getProjects'

export default function Projects(): ReactElement {
	const { isPending, isError, error, data } = useQuery({
		queryKey: ['projects'],
		queryFn: getProjects
	})
	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	const projects = data.data

	return (
		<div>
			<div className='py-5 botoom-0 h-full w-full bg-black bg-opacity-50'>

				<p className='font-ubuntu text-4xl text-center text-slate-300'>my projects </p>

				<video autoPlay loop muted id="bgVideo">
					<source src={backgroundVideo} type='video/mp4' />
				</video>
				<div className='m-5 grid grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-5 md:grid-cols-[repeat(1,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
					{projects.map((project: IProject, index) => (
						<Project key={project._id} project={project} index={index} />
					))}
				</div>
			</div>
		</div>
	)
}
