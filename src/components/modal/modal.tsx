'use client';

import styles from './modal.module.scss';
import Overlay from "@/components/overlay/overlay";
import {PropsWithChildren, useContext, useEffect} from "react";
import {TModalProps} from "@/types/types";
import {MyContext} from "@/provider/my-context";

const Modal = ({children, openAdd, openDelete}: PropsWithChildren) => {

    const {handleClose}: TModalProps = useContext(MyContext);

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

            <Overlay openAdd={openAdd} openDelete={openDelete}/>

        </>
    )
}

export default Modal