import styles from './overlay.module.scss';
import {TOverlayProps} from "@/components/overlay/overlay.types";
import {ModalContext} from "@/provider/modal-provider";
import {useContext} from "react";

const Overlay = () => {

    const {openAdd, openDelete, handleClose} = useContext(ModalContext);

    const toggle = openAdd || openDelete ? `${styles.active}` : `${styles.disabled}`;

    return <section onClick={handleClose} className={toggle}></section>
}

export default Overlay