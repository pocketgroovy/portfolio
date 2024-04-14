import { useQuery } from '@tanstack/react-query'
import getFruits from 'api/getFruits'
import Fruit from 'components/Fruit'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'


export default function GalleryPage(): ReactElement {

	const { isPending, isError, error, data } = useQuery({
		queryKey: ['fruits'],
		queryFn: getFruits
	})
	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<div className='m-5 grid grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-5 md:grid-cols-[repeat(1,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((fruit, index) => (
					<Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} index={index} />
				))}
			</div>
		</>
	)
}
