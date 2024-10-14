import { ReactNode, createContext, useState, useContext } from "react";

interface IProps {
    children: ReactNode
};



const MenuContext = createContext({} as any);

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider:React.FC<IProps> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(true)

    return (
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
           {children}
        </MenuContext.Provider>
    )
}