import { useState } from "react"
import { Container, UploadContainer } from "./styles"


function Upload () { 
    const [ selectedFiles, setSelectedFiles ] = useState<File | null>(null);
    const [ title, setTitle] = useState('');
    const [ description, setDescription ] = useState('');
    
    const handleFileChange = (event: any) => {
        if(event.target.files) {
            setSelectedFiles(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if(!selectedFiles) return;

        const formData = new FormData();
        formData.append("video", selectedFiles);
        formData.append("title", title);
        formData.append("description", description);

        try {
            const response = await fetch("http://localhost:3000", {
                method: "POST",
                body: formData
            })

            if(response.ok) {
                alert("Upload sucessfull")
            } else {
                alert("Upload failed")
            }
        } catch(error) {
            console.error("Error uploading file", error)
        }
    }
    

    return (
        <Container>
            <UploadContainer>
            <span>Fazer Upload de vídeo</span>
            <input type="file" onChange={handleFileChange} accept="video/*"/>
            <span>Qual será o título do video?</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <span>Adicione uma descriçao (opcional)</span>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={handleUpload}>Fazer Upload</button>
            </UploadContainer>
        </Container>
    )
}


export default Upload;