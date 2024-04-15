import Modal from "pages/Modal";
import { FC, useState, ReactElement} from "react";
import { useMediaQuery } from 'utils'
import infoButton from '../media/images/open.png'


const PREFERRED_IMAGE_WIDTH = 100
const MOBILE_PADDING = 16
const ASPECT_RATIO_WIDTH = 16
const ASPECT_RATIO_HEIGHT = 9

interface TechProps {
    children: ReactElement|ReactElement[];
}


export default function ModalButton(props: TechProps): ReturnType<FC> {
    const isTabletAndUp = useMediaQuery('(min-width: 600px)')

    const imageWidth = Math.min(
        PREFERRED_IMAGE_WIDTH,
        window.innerWidth - MOBILE_PADDING
    )
    const imageHeight = imageWidth / (ASPECT_RATIO_WIDTH / ASPECT_RATIO_HEIGHT)

    const [showModal, setShowModal] = useState<boolean>(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
            <div>
            <Modal open={showModal} onClose={toggleModal}>
                {props.children}
            </Modal>
                <div
                    role='button'
                    onClick={toggleModal}>
                    <div className='mt-5 items-center' >
                            <img
                                loading={
                                    !isTabletAndUp
                                        ? 'lazy'
                                        : 'eager'
                                }
                                decoding={
                                    !isTabletAndUp
                                        ? 'async'
                                        : 'sync'
                                }
                                width={imageWidth}
                                height={imageHeight}
                                src={`${infoButton}?&w=${imageWidth * window.devicePixelRatio
                                    }&h=${imageHeight * window.devicePixelRatio}`}
                                alt='info button'
                            />
                        </div>
                    </div>
                    <span className='font-bebas text-base text-left break-normal'>*technical info about this page</span>
                </div>
    );
}