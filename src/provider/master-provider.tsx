import WindowProvider from "@/provider/window-provider";
import ModalProvider from "@/provider/modal-provider";
import HeaderProvider from "@/provider/header-provider";
import AplicationProvider from "@/provider/aplication-provider";


const MasterProvider = ({children, setOpenAdd, setOpenDelete, setIsLoading}) => {
    return (
        <HeaderProvider>
            <WindowProvider setIsLoading={setIsLoading}>
                <ModalProvider setOpenAdd={setOpenAdd} setOpenDelete={setOpenDelete}>
                    <AplicationProvider>
                        {children}
                    </AplicationProvider>
                </ModalProvider>
            </WindowProvider>
        </HeaderProvider>
    )
}

export default MasterProvider