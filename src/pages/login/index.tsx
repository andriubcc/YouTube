import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { CheckBoxContainer, Container, LoginContainer } from "./styles";


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

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
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
                    <input type={showPassword? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <CheckBoxContainer>
          <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
          <label htmlFor="show-password" className="cross">Mostrar senha</label>
        </CheckBoxContainer>
                <button onClick={() => {closeDropdown();handleLogin(email, password)}}>Fazer Login</button>
            </LoginContainer>
        </Container>
        
    )
}

export default Login;