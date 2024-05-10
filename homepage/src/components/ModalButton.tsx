import Modal from "pages/Modal";
import { type FC, useState } from "react";
import { useMediaQuery } from 'utils'
import infoButton from '../media/images/stack.png'
import type { ITechProps } from "types/itechProps";


const PREFERRED_IMAGE_WIDTH = 300
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

    function onToggleModal(): void {
        setShowModal(!showModal);
    }

    return (
        <div className="m-10">
            <Modal open={showModal} onClose={onToggleModal}>
                {props.children}
            </Modal>
            <button className="fixed"
                type='button'
                onClick={onToggleModal}>
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
            </button>
        </div>
    );
}