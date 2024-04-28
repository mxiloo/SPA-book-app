import styles from './overlay.module.scss';
import {TOverlayProps} from "@/types/types";
import {useContext} from "react";
import {MyContext} from "@/provider/my-context";

const Overlay = ({openAdd, openDelete}) => {

    const {handleClose}: TOverlayProps = useContext(MyContext);
    const toggle = openAdd || openDelete ? `${styles.active}` : `${styles.disabled}`;

    return <section onClick={handleClose} className={toggle}></section>
}

export default Overlay