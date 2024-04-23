import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'utils'
import mekateimage from '../media/images/izu.png'
import Career from 'components/Career'
import Education from 'components/Education'
import ExperienceTabs from 'components/ExperienceTabs'


const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.3
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.4

export default function Experience(): ReactElement {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)')

	const imageWidth =
		(isTabletAndUp
			? window.innerWidth * DESKTOP_IMAGE_WIDTH_PERCENTAGE
			: window.innerWidth) * window.devicePixelRatio
	const imageHeight =
		(isTabletAndUp
			? window.innerHeight
			: window.innerHeight * MOBILE_IMAGE_HEIGHT_PERCENTAGE) *
		window.devicePixelRatio

	return (
		<div>
			<div className=' m-3 gap-4 grid grid-cols-4 min-h-full'>
				<div>
					<img
						width={imageWidth}
						height={imageHeight}
						style={{
							backgroundColor: 'white'
						}}
						src={`${mekateimage}?&w=${imageWidth}&h=${imageHeight}`}
						alt='mekate'
					/>
					<p className='text-sm'> with my daughter, trip to the Izu penninsula, Japan</p>
				</div>
				<div className='col-span-3'>
                        <ExperienceTabs />
				</div>
			</div>
		</div>
	)
}
