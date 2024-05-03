import {createContext, useState} from "react";


export const HeaderContext = createContext<any>(undefined);

const HeaderProvider = ({children}) => {

    const [year, setYear] = useState<number | string>(''); // Год публикации

    return <HeaderContext.Provider value={{year, setYear}}>{children}</HeaderContext.Provider>
}

export default HeaderProvider