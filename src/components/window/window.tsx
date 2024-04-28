'use client';

import styles from './window.module.scss';
import {Rating} from "@mui/material";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {useContext} from "react";
import {MyContext} from "@/provider/my-context";

const Window = () => {

    const {books, setOpenDelete, setElementId, year} = useContext(MyContext);

    const filteredBooks = year === '' ? books.sort((a, b) => b.year - a.year)
        : books.filter(element => element.year === year).sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section className={styles.container}>

            {filteredBooks.map(element => (
                <div className={styles.card} key={element.id}>
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
            ))}

        </section>
    )
}

export default Window