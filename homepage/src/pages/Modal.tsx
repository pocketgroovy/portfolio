import { FC, ReactElement } from "react";


interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement|ReactElement[];
}

export default function Modal(props: ModalProps): ReturnType<FC> {
    return (
        <div className={`${"modal"} ${props.open ? "display-block" : "display-none"}`}>
            <div className="modal-main">
                <div className="modal-head">
                    <p className="text-lg font-bebas text-left break-normal">Tools Used in this page</p>
                </div>
                <div>
                    {props.children}
                </div>
                <div className="btn-container text-lg font-bebas text-left break-normal ">
                    <div role='button' onClick={props.onClose}>Close</div>
                </div>
        </div>
      </div>
    );
}