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

    // Группировка книг по годам
    const booksByYear = books.reduce((key, book) => {
        if (!key[book.year]) {
            key[book.year] = [];
        }
        key[book.year].push(book);
        return key;
    }, {});

    // Сортировка годов по убыванию
    const sortedYears = Object.keys(booksByYear).sort((a, b) => b - a);

    return (
        <section className={styles.box}>
            <h3 className={styles.title}>Книги:</h3>
            <div className={styles.container}>
                {sortedYears.map(element => (
                    <div key={element} className={year !== '' && year != element ? styles.hidden : undefined}>
                        <h2 className={year !== '' ? styles.hidden : undefined}>{element}</h2>
                        <div className={styles.visible}>
                            {booksByYear[element].map(book => (
                                <div key={book.id} className={styles.card}>
                                    <Card element={book} setOpenDelete={setOpenDelete} showDeleteIcon={true}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Window