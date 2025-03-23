import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider=({children})=>{
    const [listOrder, setlistOrder] = useState([]);
    return(
        <MenuContext.Provider value={{listOrder, setlistOrder}}>
            {children}
        </MenuContext.Provider>
    )
}