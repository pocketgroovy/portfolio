import { ReactElement } from "react";
import { useMediaQuery } from "../utils";
import { IImage } from "types/Iimage";

const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.4
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.4


export default function ImagePane( imageProps:IImage): ReactElement {
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
        < div className = 'mt-72 row-span-2' >
                    <img
                        width={imageWidth}
                        height={imageHeight}
                        style={{
                            backgroundColor: 'white'
                        }}
                        src={`${imageProps.imagePath}?&w=${imageWidth}&h=${imageHeight}`}
                        alt={imageProps.imageTitle}
                    />
                    <p className='text-sm'> {imageProps.description}</p>
                </div >
    )
}