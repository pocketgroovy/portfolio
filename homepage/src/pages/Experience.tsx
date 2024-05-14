import type { ReactElement } from 'react'
import ExperienceTabs from 'components/ExperienceTabs'
import ImagePane from 'components/ImagePane'
import image from '../media/images/street.png'

export default function Experience(): ReactElement {

	return (
		<div>
			<div className=' m-3 gap-4 grid grid-cols-4 min-h-full'>
				<ImagePane imagePath={image} description='city center street' imageTitle='straat'/>
				<div className='col-span-3'>
					<ExperienceTabs />
				</div>
			</div>
		</div>
	)
}
