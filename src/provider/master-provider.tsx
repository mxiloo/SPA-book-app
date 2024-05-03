import WindowProvider from "@/provider/window-provider";
import HeaderProvider from "@/provider/header-provider";
import AplicationProvider from "@/provider/aplication-provider";


const MasterProvider = ({children, setIsLoading}) => {
    return (
        <HeaderProvider>
            <WindowProvider setIsLoading={setIsLoading}>
                <AplicationProvider>
                    {children}
                </AplicationProvider>
            </WindowProvider>
        </HeaderProvider>
    )
}

export default MasterProvider