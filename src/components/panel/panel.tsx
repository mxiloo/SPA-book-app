'use client';

import styles from './panel.module.scss';
import {Button} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useContext} from "react";
import {WindowContext} from "@/provider/window-provider";
import {HeaderContext} from "@/provider/header-provider";


const Panel = ({handleOpen}) => {

    const {year, setYear} = useContext(HeaderContext);
    const {books} = useContext(WindowContext)
    // console.log(year)

    const handleChange = (event: SelectChangeEvent) => {
        setYear(event.target.value as number | string);
    };

    // Достаем из массива только год, сортируем по убыванию, фильтруем по уникальности
    const sortedBooks = [...new Set(books.map(book => book.year))].sort((a, b) => b - a);

    return (
        <header className={styles.container}>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Выберите год</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Выберите год"
                    value={year}
                    onChange={handleChange}
                    className={styles.input}
                >
                    <MenuItem value=""><em>Отчистить</em></MenuItem>
                    {sortedBooks.map((element, index) => (
                        <MenuItem key={index} value={element}>{element}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button
                style={{color: "rgb(225,231,241)"}}
                variant="contained"
                onClick={handleOpen}
            >
                Добавить
            </Button>
        </header>
    )
}

export default Panel