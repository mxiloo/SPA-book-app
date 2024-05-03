import {createContext, useEffect, useState} from "react";
import {addDoc, collection, deleteDoc, doc, onSnapshot} from "@firebase/firestore";
import database from "@/config/firebase";
import {TData} from "@/types/types";


export const WindowContext = createContext<any>(undefined);

const WindowProvider = ({children, setIsLoading}) => {

    const [books, setBooks] = useState<TData[]>([]); // Все книги
    console.log(books)

    useEffect(() => {

        onSnapshot(collection(database, "books"), (snapshot) => {
            setBooks(snapshot.docs.map((doc) => ({...doc.data() as TData, id: doc.id})));
            setIsLoading(false);
        })
    }, []); // Получение данных с сервера

    const handleNewBook = async (title: string, book) => {
        for (const key in book) {
            if (book[key] === '' || book[key] === undefined) {
                delete book[key];
            } else if (key === 'year' || key === 'rate') {
                book[key] = parseInt(book[key]); // Преобразование в число
            }
        } // Если пользователь не заполнил какое-то поле, оно не будет добавляться
        const booksCollectionRef = collection(database, "books");
        await addDoc(booksCollectionRef, book);
    }; // Добавление новой книги

    const handleDeleteBook = async (id) => {
        const bookCollectionRef = doc(database, "books", id)
        await deleteDoc(bookCollectionRef)
    }; // Удаление книги

    return <WindowContext.Provider value={{
        books,
        handleNewBook,
        handleDeleteBook,
    }}>{children}</WindowContext.Provider>

}

export default WindowProvider