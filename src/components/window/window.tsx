'use client';

import styles from './window.module.scss';
import {useContext} from "react";
import Card from "@/components/card/card";
import {HeaderContext} from "@/provider/header-provider";
import {WindowContext} from "@/provider/window-provider";
import {ModalContext} from "@/provider/modal-provider";

const Window = () => {

    const {year} = useContext(HeaderContext);
    const {books} = useContext(WindowContext);
    const {setOpenDelete} = useContext(ModalContext);

    const filteredBooks = year === '' ? books.sort((a, b) => b.year - a.year)
        : books.filter(element => element.year === year).sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section className={styles.box}>
            <h3 className={styles.title}>Книги:</h3>
            <div className={styles.container}>
                {filteredBooks.map(element => (
                    <Card key={element.id} element={element} setOpenDelete={setOpenDelete} showDeleteIcon={true}/>
                ))}
            </div>
        </section>
    )
}

export default Window