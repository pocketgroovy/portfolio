import { FC, ReactElement } from "react";


interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
}

export default function Modal(props: ModalProps): ReturnType<FC> {
    return (
        <div className={`${"modal"} ${props.open ? "display-block" : "display-none"}`}>
            <div className="modal-main">
                <div className="modal-head">
                    <p>Tools Used in this page</p>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="btn-container">
                    <div role='button' onClick={props.onClose}>Close</div>
                </div>
        </div>
      </div>
    );
}