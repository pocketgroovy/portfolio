import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import WhoAmI from 'components/WhoAmI'
import ImagePane from 'components/ImagePane'
import image from '../media/images/izu.png'

export default function MyInfo(): ReactElement {

	return (
		<div>
			<div className='m-3 gap-4 grid grid-cols-4 min-h-full items-center sm:flex-row'>
				<ImagePane imagePath={image} description='with my daughter, trip to the Izu penninsula, Japan' imageTitle='k&me'/>
				<div className='col-span-3'>
					<div>
						<Link data-testid='BackLink' to='/' className='flex items-center'>
							<img src='/icons/arrow-left.svg' alt='' className='h-5 w-5' />
							<span className='ml-4 text-xl'>Back To Top Page</span>
						</Link>
						<WhoAmI />
					</div>
				</div>
			</div>
		</div>
	)
}
