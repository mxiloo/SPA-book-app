import {useContext, useEffect, useState} from "react";
import Card from "@/components/card/card";
import {TData} from "@/types/types";
import styles from './recommendations.module.scss';
import {WindowContext} from "@/provider/window-provider";


const Recommendations = () => {

    const [randomBook, setRandomBook] = useState<TData>(null); // Рандомная книга

    console.log('перерисовка рекомендаций')

    const {books} = useContext(WindowContext);

    const yearNow = new Date().getFullYear(); // Текущий год

    const filteredBooks = books.filter(element => element.year >= yearNow - 3); // Книга издана не менее 3 лет назад

    const findBooksByRating = (books, startRating) => {
        let currentRating = startRating;
        while (currentRating >= 0) {
            const booksWithRating = books.filter(book => book.rate === currentRating);
            if (booksWithRating.length > 0) {
                return booksWithRating;
            }
            currentRating--;
        }
        return [];
    }; // Функция для поиска книг с постепенным уменьшением рейтинга

    const sortedBooks = findBooksByRating(filteredBooks, 5); // Используем функцию для поиска книг с рейтингом 5 и выше
    const random = Math.floor(Math.random() * sortedBooks.length); // Берем рандомный индекс из массива

    useEffect(() => {
        if (sortedBooks.length > 0) {
            setRandomBook(sortedBooks[random]);
        }
    }, [sortedBooks, random]);

    return (
        <section className={styles.box}>
            <h3 style={{marginBottom: "10px"}}>Рекомендуем:</h3>
            {randomBook && <Card element={randomBook}/>}
        </section>
    )
}

export default Recommendations