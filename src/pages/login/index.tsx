import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


function Login(){
    const{ handleLogin } = useContext(UserContext)
    const [ dropdownOpen, setDropdownOpen] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const closeDropdown = () => {
        setDropdownOpen(false);
        navigate('/')
    }

    return (
        <>
        <div>login</div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => {
            closeDropdown();
            handleLogin(email, password)}
        }>Login</button>
        </>
    )
}

export default Login;