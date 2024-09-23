import { useContext, useState } from "react"
import { Container, UploadContainer } from "./styles"
import { UserContext } from "../../context/userContext";


function Upload () { 
    const { handleUpload } = useContext(UserContext);

    const [ title, setTitle] = useState('');
    const [ description, setDescription ] = useState('');
    const [ URL, setURL ] = useState('')


    
    
    
    return (
        <Container>
            <UploadContainer>   
            <input type="url" placeholder="URL" value={URL} onChange={(e) => setURL(e.target.value)}/>
            <input type="text" placeholder="Titulo do vídeo" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Descrição do vídeo" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={() => {handleUpload(title, description, URL)}}>Fazer Upload</button>
            </UploadContainer>
        </Container>
    )
}


export default Upload;