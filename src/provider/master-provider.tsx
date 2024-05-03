import WindowProvider from "@/provider/window-provider";
import HeaderProvider from "@/provider/header-provider";
import AplicationProvider from "@/provider/aplication-provider"
import ModalProvider from "@/provider/modal-provider";


const MasterProvider = ({children, setIsLoading}) => {
    return (
        <HeaderProvider>
            <WindowProvider setIsLoading={setIsLoading}>
                <ModalProvider>
                    <AplicationProvider>
                        {children}
                    </AplicationProvider>
                </ModalProvider>
            </WindowProvider>
        </HeaderProvider>
    )
}

export default MasterProvider