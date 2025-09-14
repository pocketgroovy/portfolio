import type { ReactElement } from 'react'
import Card from 'components/Card'
import ContactForm from 'components/ContactForm'
import ImagePane from 'components/ImagePane'
import LayoutWrapper from 'components/LayoutWrapper'
import image from '../media/images/martini.png'

export default function Contacts(): ReactElement {
    return (
        <LayoutWrapper>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
                    <p className="text-xl text-gray-400">Ready to start your project? Let's discuss your needs.</p>
                </div>
                
                <div className='m-3 gap-4 grid grid-cols-4 min-h-full'>
                    <ImagePane imagePath={image} description='martini tower' imageTitle='martini'/>
                    <div className='col-span-2'>
                        <Card />
                    </div>
                    <div className='col-span-2'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    )
}