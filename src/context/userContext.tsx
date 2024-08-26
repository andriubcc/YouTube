import { createContext, useEffect, useState } from "react";
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    
    


    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }

    useEffect(() => {
        getUser(token);
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleSubmit = (name: string, email: string, password: string, navigate: any) => {
        api.post('/user/sign-up', {name,email,password}).then(({ data }) => {
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
            alert('Cadastro realizado com sucesso');
         }).catch((error) => {
            console.log('Não foi possivel fazer o cadastro', error);
             alert('Não foi possivel fazer o cadastro');
         });
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email,password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        });
    }

    return (
        <UserContext.Provider value={{ login, user, handleLogin, handleSubmit, logOut }}>
            {children}
        </UserContext.Provider>
    )
}