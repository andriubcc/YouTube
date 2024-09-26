import { createContext, useCallback, useEffect, useState } from "react";
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [user_id, setUser_id] = useState(localStorage.getItem('user_id') as string);
    const [title, setTitle] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [URL, setURL] = useState('');

    const formatDateForSQL = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês de 0-11, por isso +1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };
    
    // login fica bom com ("")






    
    const getUser = useCallback((token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
            localStorage.setItem('user_id', data.user.id);
            setUser_id(user_id);
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }, [user_id]);
    
    
    
    const getVideos = useCallback(() => {
        api.get(`/videos/get-videos/${user_id}`).then((response) => {
            setTitle(response.data.videos[0].title);
            setCurrentDate(response.data.videos[0].video_date);
            setURL(response.data.videos[0].URL);
            console.log('Vídeos retornados com sucesso', response.data.videos[0])
        }).catch((error) => {
            console.log('Erro ao buscar vídeos', error)
        })
        // eslint-disable-next-line
    }, [user_id]);
    
    
    useEffect(() => {
            getUser(token);
            getVideos();
        // eslint-disable-next-line
    },[token, getUser, user_id, getVideos]);
    
    
    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id')
        setLogin(false);
        setUser('');
        setTitle('');
        setCurrentDate('');
        setURL('');
    }
    
    const handleSubmit = (name: string, email: string, password: string, navigate: any) => {
        api.post('/user/sign-up', {name,email,password}).then(() => {
            navigate('/login');
            alert('Cadastro realizado com sucesso');
        }).catch((error) => {
            console.log('Não foi possivel fazer o cadastro', error);
            alert('Não foi possivel fazer o cadastro');
        });
    }
    
    
    const handleLogin = (email: string, password: string, title: string) => {
        const reload = () => {
            window.location.reload()
        }

        api.post('/user/sign-in', {email,password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);  
            getUser(data.token);
            getVideos();
            reload();
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        });
    }

    // {headers:{Authorization: token}

    const handleUpload = (title: string, description: string, URL: string) => {
        const currentDate = formatDateForSQL(new Date());
        console.log({user_id, title, description, video_date: currentDate, URL});

         api.post('videos/create-video', {user_id, title, description, video_date: currentDate, URL}, {headers: {Authorization: token}}).then(() => {
            setTitle(title as string)
            setCurrentDate(currentDate as string)
            setURL(URL as string)
        }).catch((error) => {
            console.log('Nao possivel fazer o Upload', error);
        })
    }


    return (
        <UserContext.Provider value={{ login, user, title, currentDate, URL, handleLogin, handleSubmit, logOut, handleUpload}}>
            {children}
        </UserContext.Provider>
    )
}