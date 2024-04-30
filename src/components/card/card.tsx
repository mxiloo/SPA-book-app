import styles from './card.module.scss';
import {Rating} from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import {useContext} from "react";
import {MyContext} from "@/provider/my-context";


const Card = ({element}) => {

    const {setOpenDelete, setElementId} = useContext(MyContext);

    return (
        <div className={styles.card}>

            {element?.image ?
                <img className={styles.logo} alt={'Обложка'} src={element?.image} />
                :
                <div className={styles.noLogo}></div>
            }

            <div className={styles.box}>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>{element.title}</h2>
                    <span>Автор: {element.author}</span>
                </div>

                <div className={styles.rate}>
                    <Rating name="half-rating" defaultValue={element.rate} precision={0.5} readOnly />
                    <button className={styles.delete} onClick={() => {
                        setOpenDelete(true)
                        setElementId(element.id)
                    }}>
                        <DeleteTwoToneIcon />
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Card