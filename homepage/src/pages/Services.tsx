import type { ReactElement } from 'react'
import ServicesTabs from 'components/ServicesTabs'
import ImagePane from 'components/ImagePane'
import image from '../media/images/cityhall.png'

export default function Services(): ReactElement {

    return (
        <div>
            <div className=' m-3 gap-4 grid grid-cols-4 min-h-full'>
                <ImagePane imagePath={image} description='city hall' imageTitle='cityhall'/>
                <div className='col-span-3'>
                    <ServicesTabs />
                </div>
            </div>
        </div>
    )
}
