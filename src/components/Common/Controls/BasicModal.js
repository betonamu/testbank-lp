import classNames from 'classnames';
import { useMemo } from "react";
import Modal from 'react-modal';

import { ssrMode } from "@constants";

import styles from './BasicModal.module.scss';

const BasicModal = ({isOpen, children, contentClassName, overlayClassName, ...props}) => {
    const getScrollBarWidth = () => {
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }

    const adjustDialog = () => {
        const scrollbarWidth = getScrollBarWidth();
        const isBodyOverflowing = scrollbarWidth > 0;

        if (isBodyOverflowing) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
    }

    useMemo(() => {
        if (ssrMode) {
            return;
        }

        if (isOpen) {
            adjustDialog();
        } else {
            document.body.style.paddingRight = '';
        }
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            contentLabel="Basic Modal"
            ariaHideApp={false}
            // htmlOpenClassName="htmlOpenClassName"
            bodyOpenClassName={classNames(styles.basicModal, isOpen && styles.open)}
            // portalClassName="portalClassName"
            overlayClassName={classNames(styles.overlay, overlayClassName)}
            className={classNames(styles.content, contentClassName)}
            {...props}
        >
            {children}
        </Modal>
    )
}

export default BasicModal;
