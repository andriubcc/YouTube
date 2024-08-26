import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Container, SignUpContainer } from "./styles";
import { useNavigate } from "react-router-dom";


function SignUp(){
    const{ handleSubmit } = useContext(UserContext)
    const navigate = useNavigate()
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
   
    return (
        <Container>
            <SignUpContainer>
                <span>Fazer Cadastro</span>
                <div className="cadastro">
                    <span>Nome</span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="cadastro">
                    <span>Seu melhor email</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="cadastro">
                    <span>Crie uma senha</span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={() => {handleSubmit(name, email, password, navigate)}}>Cadastrar</button>
                <span>Ja possui cadastro?</span>
                <button onClick={() => {navigate('/login')}}>Fazer Login</button>
            </SignUpContainer>
        </Container>
        
    )
}

export default SignUp;