import type { FC, ReactElement } from "react";


interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement | ReactElement[];
}

export default function Modal(props: ModalProps): ReturnType<FC> {
    return (
        <div data-testid="modal-display" className={`${"modal"} ${props.open ? "display-block" : "display-none"}`}>
            <div className="modal-main text-black">
                <div className="modal-head">
                    <p className="text-lg font-bebas text-left break-normal">Main Tools Used To Make This Website</p>
                </div>
                <div>
                    {props.children}
                </div>
                <div className="btn-container text-lg font-bebas text-left break-normal ">
                    <button type='button' onClick={props.onClose}><i className="m-2 fa-solid fa-circle-xmark" />Close</button>
                </div>
            </div>
        </div>
    );
}