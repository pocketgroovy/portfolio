import Modal from "pages/Modal";
import { FC, useState } from "react";
import { useMediaQuery } from 'utils'
import infoButton from '../media/images/open.png'


const PREFERRED_IMAGE_WIDTH = 100
const MOBILE_PADDING = 16
const ASPECT_RATIO_WIDTH = 16
const ASPECT_RATIO_HEIGHT = 9


export default function ModalInfo(): ReturnType<FC> {
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
        <>
            <Modal open={showModal} onClose={toggleModal}>
                <ul className="list-disc">
                    <li>React</li>
                    <li>Vite</li>
                    <li>TypeScript</li>
                    <li>TailwindCSS</li>
                    <li>Visual Code</li>
                </ul>
            </Modal>
            <div>
                <div
                    role='button'
                    onClick={toggleModal}>
                    <div className='m-5 flex items-center' >
                        <div className='relative'>
                            <img
                                className='mr-10'
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
                </div>
                <span className='text-sm font-bebas text-left break-normal'>technical info about this page</span>
            </div>
        </>
    );
}