import { ReactNode, createContext, useState, } from "react";

interface IProps {
    children: ReactNode
};



export const UserContext = createContext({});

export const UserStore:React.FC<IProps> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(true)

    return (
        <UserContext.Provider value={{openMenu, setOpenMenu}}>
           {children}
        </UserContext.Provider>
    )
}