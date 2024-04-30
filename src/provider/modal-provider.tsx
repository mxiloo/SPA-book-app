import {createContext} from "react";


export const ModalContext = createContext<any>(undefined);

const ModalProvider = ({children, setOpenAdd, setOpenDelete}) => {

    const handleOpen = () => setOpenAdd(true); // Открыть модалку добавления книги
    const handleClose = () => {
        setOpenAdd(false)
        setOpenDelete(false)
    }; // Закрыть модалку


    return <ModalContext.Provider value={{handleOpen, handleClose, setOpenDelete}}>{children}</ModalContext.Provider>
}

export default ModalProvider