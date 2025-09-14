import type { ReactElement } from 'react'
import ServicesTabs from 'components/ServicesTabs'
import ImagePane from 'components/ImagePane'
import LayoutWrapper from 'components/LayoutWrapper'
import image from '../media/images/cityhall.png'

export default function Services(): ReactElement {
    return (
        <LayoutWrapper>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">Services</h1>
                    <p className="text-xl text-gray-400">Professional development services tailored to your needs</p>
                </div>
                
                <div className='m-3 gap-4 grid grid-cols-4 min-h-full'>
                    <ImagePane imagePath={image} description='city hall' imageTitle='cityhall'/>
                    <div className='col-span-3'>
                        <ServicesTabs />
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    )
}