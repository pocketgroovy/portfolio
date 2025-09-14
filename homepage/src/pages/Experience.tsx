import type { ReactElement } from 'react'
import ExperienceTabs from 'components/ExperienceTabs'
import ImagePane from 'components/ImagePane'
import LayoutWrapper from 'components/LayoutWrapper'
import image from '../media/images/street.png'

export default function Experience(): ReactElement {
    return (
        <LayoutWrapper>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">My Experience</h1>
                    <p className="text-xl text-gray-400">10+ years of professional development experience</p>
                </div>
                
                <div className='m-3 gap-4 grid grid-cols-4 min-h-full'>
                    <ImagePane imagePath={image} description='city center street' imageTitle='straat'/>
                    <div className='col-span-3'>
                        <ExperienceTabs />
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    )
}