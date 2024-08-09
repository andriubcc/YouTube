import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Container} from "./styles"



function Dropdown () {
    const { logOut } = useContext(UserContext);
    
    const buttons = [
        {label: 'Conta do Google'},
        {label: 'Configurações'},
        {label: 'Sair da Conta', onClick: () => {console.log('Logout function called'); logOut()}}
    ]
    
    return (
        <Container className="setinha">
            {buttons.map((buttons, index) => (
                <div onClick={buttons.onClick}>{buttons.label}</div>
            ))}   
        </Container>
    
    )
}


export default Dropdown;