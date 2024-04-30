'use client';

import styles from './aplication.module.scss';
import {useContext, useState} from "react";
import {Button} from "@mui/material";
import {useInput} from "@/hooks/hooks";
import {TData} from "@/types/types";
import {ModalContext} from "@/provider/modal-provider";
import {WindowContext} from "@/provider/window-provider";

const Aplication = () => {

    const titleInput = useInput<string>('', {isEmpty: true, maxLength: 100});
    const title = titleInput.value;

    const authorInput = useInput<string>('', {isEmpty: true});
    const author = authorInput.value;

    const rateInput = useInput<string>('', {isEmpty: true, isNumber: true});
    const rate = rateInput.value;

    const yearInput = useInput<string>('', {isEmpty: true, minYear: 1800});
    const year = yearInput.value;

    const [secondAuthor, setSecondAuthor] = useState<string>('');

    const [number, setNumber] = useState<string>('');

    const [image, setImage] = useState<string>('');

    const {handleNewBook} = useContext(WindowContext);
    const {handleClose} = useContext(ModalContext);

    const errorStyle = {color: "#e14e4e"};
    const liStyle: object = {listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", margin: "20px 0"};

    const handleSecondAuthor = (e) => {
        setSecondAuthor(e.target.value)
    };

    const handleNumber = (e) => {
        setNumber(e.target.value)
    };

    const handleImage = (e) => {
        setImage(e.target.value)
    };

    let book = {
        title,
        author,
        secondAuthor,
        rate,
        number,
        year,
        image
    } as TData; // Объект с заполненными данными пользователя

    const clearState = () => {
        titleInput.setValue('')
        authorInput.setValue('')
        setSecondAuthor('')
        rateInput.setValue('')
        setNumber('')
        yearInput.setValue('')
    };

    return (
        <form>
            <div className={styles.titles}>
                <h2>Добавление книги</h2>
                <h3 style={{opacity: "0.6"}}>Обратите внимание, что при заполнении необходимо заполнить все обязательные поля!</h3>
                <h4 style={{opacity: "0.6"}}>Необязательные поля можно не заполнять</h4>
            </div>

            <ul className={styles.container}>
                <li style={liStyle}>
                    <span>Название произведения</span>
                    <input className={styles.input} placeholder='Введите название' value={titleInput.value} onChange={e => titleInput.onChange(e)}/>
                    {titleInput.isEmpty && <span style={errorStyle}>Данное поле обязательно &#9650;</span>}
                    {titleInput.maxLengthError && <span style={errorStyle}>Максимальное количество символов 100, сейчас: {title.length}</span>}
                </li>
                <li style={liStyle}>
                    <span>Автор</span>
                    <input className={styles.input} placeholder='Введите автора' value={authorInput.value} onChange={e => authorInput.onChange(e)}/>
                    {authorInput.isEmpty && <span style={errorStyle}>Данное поле обязательно &#9650;</span>}
                </li>
                <li style={liStyle}>
                    <div className={styles.box}>
                        <span>Автор</span>
                        <span style={{opacity: "0.7"}}>(не обязательно)</span>
                    </div>

                    <input className={styles.input} placeholder='Введите автора' value={secondAuthor} onChange={handleSecondAuthor}/>
                </li>
                <li style={liStyle}>
                    <span>Оценка</span>
                    <input className={styles.input} placeholder='Введите число' type='number' value={rateInput.value} onChange={e => rateInput.onChange(e)}/>
                    {rateInput.isEmpty && <span style={errorStyle}>Данное поле обязательно &#9650;</span>}
                    {rateInput.isNumberError && <span style={errorStyle}>Необходимо вводить числа от 1 до 5</span>}
                </li>
                <li style={liStyle}>
                    <div className={styles.box}>
                        <span>ISBN</span>
                        <span style={{opacity: "0.7"}}>(не обязательно)</span>
                    </div>

                    <input className={styles.input} placeholder='Введите ISBN' value={number} onChange={handleNumber}/>
                </li>
                <li style={liStyle}>
                    <div className={styles.box}>
                        <span>Год выпуска</span>
                    </div>

                    <input className={styles.input} placeholder='Введите год выпуска' type='number' value={yearInput.value} onChange={e => yearInput.onChange(e)}/>
                    {yearInput.isEmpty && <span style={errorStyle}>Данное поле обязательно &#9650;</span>}
                    {yearInput.minYearError && <span style={errorStyle}>Минимальный год выпуска 1800</span>}
                </li>
                <li style={liStyle}>
                    <div className={styles.box}>
                        <span>Обложка</span>
                        <span style={{opacity: "0.7"}}>(не обязательно)</span>
                    </div>

                    <input className={styles.input} placeholder='Вставьте ссылку на картинку / обложку произведения' value={image} onChange={handleImage}/>
                </li>
            </ul>

            <Button variant="contained"
                    type='submit'
                    disabled={!titleInput.isValid || !authorInput.isValid || !rateInput.isValid || !yearInput.isValid || yearInput.minYearError || rateInput.isNumberError}
                    onClick={(e) => {
                        e.preventDefault();
                        handleNewBook(title, book);
                        handleClose();
                        clearState();
                    }}>
                Создать
            </Button>
        </form>
    )
}

export default Aplication