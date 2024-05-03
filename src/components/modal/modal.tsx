'use client';

import styles from './modal.module.scss';
import Overlay from "@/components/overlay/overlay";
import {useEffect} from "react";
import {TModalProps} from "@/components/modal/modal.types";


const Modal = ({children, openAdd, openDelete, handleClose}: TModalProps) => {

    const toggle = openAdd || openDelete ? `${styles.active}` : `${styles.disabled}`;

    useEffect(() => {
        function closeEsc(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                handleClose()
            }
        }
        document.addEventListener('keydown', closeEsc)
        return () => document.removeEventListener('keydown', closeEsc)
    }, []);

    return (
        <>
            <section className={toggle}>
                <div className={styles.modal}>
                    {children}
                </div>
            </section>

            <Overlay openAdd={openAdd} openDelete={openDelete} handleClose={handleClose}/>

        </>
    )
}

export default Modal