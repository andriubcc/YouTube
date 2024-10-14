import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Container} from "./styles"
import { useNavigate } from "react-router-dom";

interface DropDownProps {
    isOpen: boolean;
  }

function Dropdown ({isOpen}: DropDownProps) {
    const { logOut, getVideos } = useContext(UserContext);

    const navigate = useNavigate();
    
    const buttons = [
        {label: 'Fazer Upload de vídeo', onClick: () => {navigate('/upload')}},
        {label: 'Meus Vídeos', onClick: () => {navigate('/myvideos'); getVideos()}},
        {label: 'Sair da Conta', onClick: () => {console.log('Logout function called'); logOut()}}
    ]
    
    return (
        <Container isOpen={isOpen}>
            {buttons.map((buttons) => (
                <div onClick={buttons.onClick}>{buttons.label}</div>
            ))}   
        </Container>
    
    )
}


export default Dropdown;