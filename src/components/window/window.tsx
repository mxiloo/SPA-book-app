'use client';

import styles from './window.module.scss';
import {Rating} from "@mui/material";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {useContext} from "react";
import {MyContext} from "@/provider/my-context";
import Card from "@/components/card/card";

const Window = () => {

    const {books, year} = useContext(MyContext);

    const filteredBooks = year === '' ? books.sort((a, b) => b.year - a.year)
        : books.filter(element => element.year === year).sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section className={styles.box}>
            <h3 style={{marginBottom: "10px"}}>Книги:</h3>
            <div className={styles.container}>
                {filteredBooks.map(element => (
                    <Card key={element.id} element={element} />
                ))}
            </div>
        </section>

    )
}

export default Window