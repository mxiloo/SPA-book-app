'use client';

import styles from './window.module.scss';
import {useContext} from "react";
import Card from "@/components/card/card";
import {HeaderContext} from "@/provider/header-provider";
import {WindowContext} from "@/provider/window-provider";

const Window = ({setOpenDelete}) => {

    const {year} = useContext(HeaderContext);
    const {books} = useContext(WindowContext);

    const filteredBooks = year === '' ? books.sort((a, b) => b.year - a.year)
        : books.filter(element => element.year === year).sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section className={styles.box}>
            <h3 style={{marginBottom: "10px"}}>Книги:</h3>
            <div className={styles.container}>
                {filteredBooks.map(element => (
                    <Card key={element.id} element={element} setOpenDelete={setOpenDelete} showDeleteIcon={true}/>
                ))}
            </div>
        </section>
    )
}

export default Window