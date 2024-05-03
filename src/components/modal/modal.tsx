'use client';

import styles from './modal.module.scss';
import Overlay from "@/components/overlay/overlay";
import {useContext, useEffect} from "react";
import {TModalProps} from "@/components/modal/modal.types";
import {ModalContext} from "@/provider/modal-provider";
import Aplication from "@/components/aplication/aplication";
import DeleteAplication from "@/components/delete-aplication/delete-aplication";


const Modal = () => {

    const {openAdd, openDelete, handleClose} = useContext(ModalContext);

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
                    {openAdd && <Aplication />}
                    {openDelete && <DeleteAplication />}
                </div>
            </section>

            <Overlay />

        </>
    )
}

export default Modal