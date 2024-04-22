import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'utils'
import mekateimage from '../media/images/izu.png'
import Career from 'components/Career'
import Education from 'components/Education'


const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.4
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.3

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
			<div className='m-3 gap-4 grid grid-cols-4 min-h-full items-center sm:flex-row'>
				<div className='relative'>
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
					<div>
						<Link to='/' className='flex items-center'>
							<img src='/icons/arrow-left.svg' alt='' className='h-5 w-5' />
							<span className='ml-4 text-xl'>Back To Top Page</span>
						</Link>
						<Career />
                        <Education />
					</div>
				</div>
			</div>
		</div>
	)
}
