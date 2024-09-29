import { Container, ImageBanner, TextContainer,TitleContainer, ChannelImage, Title, TextCard } from "./styles";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

interface IProps {
  openMenu: boolean
}


function MyVideoComponent({openMenu}: IProps ) {
  const { user, videos } = useContext(UserContext);
  
  
  function getTimeDifferenceMessage(video_date: string) {
    const created = new Date(video_date) as any;
    const Now = new Date() as any;
    const diffInMilliSeconds = Now - created;
    
    
    const diffInSeconds = Math.floor(diffInMilliSeconds / 1000);
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    
    if (minutes < 60) {
      return 'menos de uma hora';
    } else if (hours < 24) {
      return `há ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    } else if (days < 30) {
      return `há ${days} ${days === 1 ? 'dia' : 'dias'}`;
    } else if (months < 12) {
      return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
    } else {
      return `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
    }
  }
  
  
  if (!videos || videos.length === 0) {
    return (
      <Container  openMenu={openMenu}>
        <div id="novideos" >Este usuário não tem videos</div>
      </Container>
    );
  }
  
  
  return (
    <Container openMenu={openMenu}>
    {videos.map(( video: any, index: number) => (
      <div key={index}>
         <ImageBanner  src={video.URL}/>
         <TitleContainer >
           <ChannelImage>{user.nome && user.nome[0] && user.nome[0].toUpperCase()}</ChannelImage>
           <TextContainer>
               <Title>{video.title}</Title>
               <TextCard>{getTimeDifferenceMessage(video.video_date)}</TextCard>
               <TextCard></TextCard>
           </TextContainer>
         </TitleContainer>
      </div>
    ))}
    </Container>
   )
  }
  
  
  export default MyVideoComponent;