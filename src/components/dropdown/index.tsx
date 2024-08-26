import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Container} from "./styles"
import { useNavigate } from "react-router-dom";



function Dropdown () {
    const { logOut } = useContext(UserContext);

    const navigate = useNavigate();
    
    const buttons = [
        {label: 'Conta do Google'},
        {label: 'Fazer Upload de vídeo', onClick: () => {navigate('/upload')}},
        {label: 'Configurações'},
        {label: 'Sair da Conta', onClick: () => {console.log('Logout function called'); logOut()}}
    ]
    
    return (
        <Container>
            {buttons.map((buttons) => (
                <div onClick={buttons.onClick}>{buttons.label}</div>
            ))}   
        </Container>
    
    )
}


export default Dropdown;