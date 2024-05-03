import Modal from "pages/Modal";
import { FC, useState } from "react";
import { useMediaQuery } from 'utils'
import infoButton from '../media/images/open.png'
import { ITechProps } from "types/itechProps";


const PREFERRED_IMAGE_WIDTH = 100
const MOBILE_PADDING = 16
const ASPECT_RATIO_WIDTH = 16
const ASPECT_RATIO_HEIGHT = 9


export default function ModalButton(props: ITechProps): ReturnType<FC> {
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
        <div className="ml-10">
            <Modal open={showModal} onClose={toggleModal}>
                {props.children}
            </Modal>
            <div className="fixed"
                role='button'
                onClick={toggleModal}>
                <div >
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
                <p className='font-bebas text-base text-white text-left break-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>*technical info about this page</p>
            </div>
        </div>
    );
}