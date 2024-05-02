import { useQuery } from '@tanstack/react-query'
import getFruits from 'api/getFruits'
import Fruit from 'components/Fruit'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import backgroundVideo from '../media/video/samplevideo.mp4'

export default function Projects(): ReactElement {

	const { isPending, isError, error, data } = useQuery({
		queryKey: ['fruits'],
		queryFn: getFruits
	})
	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<div>
			<p className='font-jersey25 m-3 text-5xl text-center'>my sample projects </p>
			<video autoPlay loop muted id="bgVideo">
				<source src={backgroundVideo} type='video/mp4' />
			</video>
			<div className='m-5 grid grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-5 md:grid-cols-[repeat(1,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((fruit, index) => (
					<Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} index={index} />
				))}
			</div>
		</div>
	)
}
