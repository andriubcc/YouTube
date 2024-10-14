import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Container, LoginContainer } from "./styles";


function Login(){
    const{ handleLogin } = useContext(UserContext)
    // eslint-disable-next-line
    const [ dropdownOpen, setDropdownOpen] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const closeDropdown = () => {
        setDropdownOpen(false);
        navigate('/')
    }

    
    return (
        <Container>
            <LoginContainer>
                <span>Fazer Login</span>
                <div className="login">
                    <span>Email</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="login">
                    <span>Senha</span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={() => {closeDropdown();handleLogin(email, password)}}>Login</button>
            </LoginContainer>
        </Container>
        
    )
}

export default Login;