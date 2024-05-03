import styles from './overlay.module.scss';
import {TOverlayProps} from "@/components/overlay/overlay.types";

const Overlay = ({openAdd, openDelete, handleClose}: TOverlayProps) => {

    const toggle = openAdd || openDelete ? `${styles.active}` : `${styles.disabled}`;

    return <section onClick={handleClose} className={toggle}></section>
}

export default Overlay