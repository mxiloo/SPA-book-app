import styles from './card.module.scss';
import {Rating} from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import {useContext} from "react";
import {AplicationContext} from "@/provider/aplication-provider";
import {TData} from "@/types/types";


const Card = ({element, setOpenDelete, showDeleteIcon}: TData) => {

    const {setElementId} = useContext(AplicationContext);

    return (
        <section className={styles.card}>

            {element?.image ?
                <img className={styles.logo} alt={'Обложка'} src={element?.image} />
                :
                <div className={styles.noLogo}></div>
            }

            <div className={styles.box}>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>{element?.title}</h2>
                    <span className={styles.text}>
                        Автор: {element?.author}
                        {element?.secondAuthor ? <span>, {element?.secondAuthor}</span> : null}
                    </span>
                    <span>Год выпуска: {element.year}</span>
                    {element?.number && (
                        <span>ISBN: {element?.number}</span>
                    )}
                </div>

                <div className={styles.rate}>
                    <span>Оценка: {element?.rate}</span>
                    {/*<Rating name="half-rating" defaultValue={element?.rate} precision={0.5} readOnly />*/}

                    {showDeleteIcon && (
                        <button className={styles.delete} onClick={() => {
                            setOpenDelete(true)
                            setElementId(element?.id)
                        }}>
                            <DeleteTwoToneIcon />
                        </button>
                    )}

                </div>
            </div>

        </section>
    )
}

export default Card