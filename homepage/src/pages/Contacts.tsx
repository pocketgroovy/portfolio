import type { ReactElement } from 'react'
import Card from 'components/Card'
import ContactForm from 'components/ContactForm'
import ImagePane from 'components/ImagePane'
import image from '../media/images/martini.png'

export default function Contacts(): ReactElement {

    return (
        <div>
            <div className=' m-3 gap-4 grid grid-cols-4 min-h-full'>
                <ImagePane imagePath= {image} description='martini tower' imageTitle='martini'/>
                <div className='col-span-2'>
                    <Card />
                </div>
                <div className='col-span-2'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
