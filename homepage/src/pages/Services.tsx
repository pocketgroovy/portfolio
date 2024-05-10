import type { ReactElement } from 'react'
import { useMediaQuery } from 'utils'
import mekateimage from '../media/images/izu.png'
import ServicesTabs from 'components/ServicesTabs'


const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.3
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.4

export default function Services(): ReactElement {
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
                <div className='mt-72 row-span-2'>
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
                    <ServicesTabs />
                </div>
            </div>
        </div>
    )
}
