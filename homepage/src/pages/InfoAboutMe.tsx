import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import WhoAmI from 'components/WhoAmI'
import ImagePane from 'components/ImagePane'
import LayoutWrapper from 'components/LayoutWrapper'
import image from '../media/images/izu.png'

export default function InfoAboutMe(): ReactElement {
    return (
        <LayoutWrapper>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className='m-3 gap-4 grid grid-cols-4 min-h-full items-center sm:flex-row'>
                    <ImagePane imagePath={image} description='with my daughter, trip to the Izu penninsula, Japan' imageTitle='k&me'/>
                    <div className='col-span-3'>
                        <div>
                            <Link data-testid='BackLink' to='/' className='flex items-center mb-6 text-cyan-400 hover:text-cyan-300 transition-colors'>
                                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span className='ml-4 text-xl'>Back To Home</span>
                            </Link>
                            <WhoAmI />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    )
}