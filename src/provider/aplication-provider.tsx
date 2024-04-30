import {createContext, useState} from "react";


export const AplicationContext = createContext<any>(undefined);

const AplicationProvider = ({children}) => {

    const [elementId, setElementId] = useState<string>(''); // Стейт выбранного элемента
    console.log(elementId)

    return <AplicationContext.Provider value={{elementId, setElementId}}>{children}</AplicationContext.Provider>
}

export default AplicationProvider