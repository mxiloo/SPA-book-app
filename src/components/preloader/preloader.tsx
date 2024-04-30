import CircularProgress from "@mui/material/CircularProgress";
import styles from './preloader.module.scss';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <CircularProgress />
        </div>
    )
}

export default Preloader