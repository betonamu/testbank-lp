import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./Menu.module.scss";
import {ssrMode} from "@/constants";

const Modal = props => {
    return (
        <div></div>
    )
    // const closeOnEscapeKeyDown = e => {
    //     if ((e.charCode || e.keyCode) === 27) {
    //         props.onClose();
    //     }
    // };
    //
    // useEffect(() => {
    //     document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    //     return function cleanup() {
    //         document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    //     };
    // }, []);
    //
    // return !ssrMode && ReactDOM.createPortal(
    //     props.show &&
    //     <div className={styles.modal} onClick={props.onClose}>
    //         <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
    //             <div className="modal-header">
    //                 <h4 className="modal-title">{props.title}</h4>
    //             </div>
    //             <div className={styles.modalBody}>{props.children}</div>
    //             <div className="modal-footer">
    //                 <button onClick={props.onClose} className="button">
    //                     Close
    //                 </button>
    //             </div>
    //         </div>
    //     </div>,
    //     document.getElementById('root')
    // );
};

export default Modal;
