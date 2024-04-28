import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {TData} from "@/types/types";
import {addDoc, collection, onSnapshot, deleteDoc, doc} from "@firebase/firestore";
import database from "@/config/firebase";


export const MyContext = createContext<any>(undefined | true);

const MyContextProvider = ({children, setIsLoading, setOpenAdd, setOpenDelete}: PropsWithChildren) => {
    const [elementId, setElementId] = useState<string>(''); // Стейт выбранного элемента
    const [year, setYear] = useState<number | string>(''); // Год публикации
    // console.log(year)
    const [books, setBooks] = useState<TData[]>([]); // Все книги
    // console.log(books)

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

    const handleOpen = () => setOpenAdd(true); // Открыть модалку добавления книги
    const handleClose = () => {
        setOpenAdd(false)
        setOpenDelete(false)
    }; // Закрыть модалку

    return (
        <MyContext.Provider value={{
            handleOpen,
            handleClose,
            year, setYear,
            books,
            handleNewBook,
            handleDeleteBook,
            setOpenDelete,
            elementId, setElementId
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider