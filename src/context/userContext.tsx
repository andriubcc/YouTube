import { createContext, useCallback, useEffect, useState } from "react";
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [user_id, setUser_id] = useState(localStorage.getItem('user_id') as string);
    // eslint-disable-next-line
    const [title, setTitle] = useState('');
    const [ videos, setVideos] = useState<any>([]);
    const [ searchedVideos, setSearchedVideos] = useState<any>([]);

    const formatDateForSQL = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês de 0-11, por isso +1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };
    
    
    const getUser = useCallback((token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}, }).then(({ data }) => {
                setUser(data.user);
                setLogin(true);
                localStorage.setItem('user_id', data.user.id);
                setUser_id(data.user.id);
                console.log(data.user);
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }, []);
    
    
    const getVideos = useCallback((userId: string) => {
        api.get(`/videos/get-videos/${user_id}`).then((response) => {
            setVideos(response.data.videos)
            console.log('Vídeos retornados com sucesso', response.data.videos[0])
        }).catch((error) => {
            console.log('Erro ao buscar vídeos', error)
        })
    }, [user_id]);


    const searchVideos = useCallback((title: string) => {
        api.get(`/videos/search?search=${title}`).then( async(response) => {
            const videos = response.data.videos 

            const videoWithUserName = await Promise.all(videos.map(async(video: any) => {
                try {
                    const userResponse = await api.get(`/user/get-user/${video.user_id}`);
                    return {
                        ...video,
                        userName: userResponse.data.user.nome
                    };
                }catch(error) {
                    console.error('Erro ao buscar informações do usúario', error);
                    return video;
                }
            }))


            setSearchedVideos(videoWithUserName)
            console.log('Pesquisa feita com sucesso', response.data.videos[0])
            console.log(videos)
        }).catch((error) => {
            console.log("Erro ao procurar videos", error)
        })
    }, [])
    

    useEffect(() => {
        if (token) {
            getUser(token);
        }
    }, [token, getUser]);

    
    useEffect(() => {
        if (user_id) {
            getVideos(user_id);
        }
    }, [user_id, getVideos]);

    useEffect(() => {
        if(title) {
            searchVideos(title);
        }
    }, [title, searchVideos]);
    
    
    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id')
        setLogin(false);
        setUser('');
        setVideos([]);
        setToken('');
        setUser_id('');
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
        api.post('/user/sign-in', {email,password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);  
            getUser(data.token);
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error);
        });
    }

    interface Video {
        title: string;
        video_date: string;
        URL: string;
    }


    const handleUpload = (title: string, description: string, URL: string) => {
        const currentDate = formatDateForSQL(new Date());
        console.log({user_id, title, description, video_date: currentDate, URL});

         api.post('videos/create-video', {user_id, title, description, video_date: currentDate, URL}, {headers: {Authorization: token}}).then(() => {
            setVideos((prevVideos: Video[]) => [
                ...prevVideos,
                {title, video_date: currentDate, URL}
            ])
        }).catch((error) => {
            console.log('Nao possivel fazer o Upload', error);
        })
    }



    return (
        <UserContext.Provider value={{ login, user, videos, searchedVideos, handleLogin, handleSubmit, logOut, handleUpload, searchVideos, getVideos}}>
            {children}
        </UserContext.Provider>
    )
}