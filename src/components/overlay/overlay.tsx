import styles from './overlay.module.scss';
import {TOverlayProps} from "@/types/types";
import {useContext} from "react";
import {ModalContext} from "@/provider/modal-provider";

const Overlay = ({openAdd, openDelete}) => {

    const {handleClose}: TOverlayProps = useContext(ModalContext);
    const toggle = openAdd || openDelete ? `${styles.active}` : `${styles.disabled}`;

    return <section onClick={handleClose} className={toggle}></section>
}

export default Overlay