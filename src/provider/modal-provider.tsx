import {createContext, useState} from "react";


export const ModalContext = createContext<any>(undefined);

const ModalProvider = ({children}) => {

    const [openAdd, setOpenAdd] = useState<boolean>(false); // Стейт модалки добавления книги
    const [openDelete, setOpenDelete] = useState<boolean>(false); // Стейт модалки удаления книги

    const handleOpen = () => setOpenAdd(true); // Открыть модалку добавления книги
    const handleClose = () => {
        setOpenAdd(false)
        setOpenDelete(false)
    }; // Закрыть модалку

    return <ModalContext.Provider value={{openAdd, openDelete, setOpenDelete, handleOpen, handleClose}}>
        {children}
    </ModalContext.Provider>
}

export default ModalProvider