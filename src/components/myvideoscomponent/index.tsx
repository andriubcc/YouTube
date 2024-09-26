import { Container, ImageBanner, TextContainer,
    TitleContainer, ChannelImage, Title, TextCard } from "./styles";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

//  interface IProps {
//   URL: string,
//   title: string,
//   video_date: string,

//  }


function MyVideoComponent() {
  const { user, title, currentDate, URL } = useContext(UserContext);

  function getTimeDifferenceMessage() {
    const created = new Date(currentDate) as any;
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
  
  const timeDifferenceMessage = getTimeDifferenceMessage();
    
  if (!URL || !title! || !currentDate) {
    return (
      <Container>
        <div id="novideos" >Este usuário não tem videos</div>
      </Container>
    );
  }

  return (
    <Container>
         <ImageBanner  src={URL}/>
         <TitleContainer >
           <ChannelImage>{user.nome && user.nome[0] && user.nome[0].toUpperCase()}</ChannelImage>
           <TextContainer>
               <Title>{title}</Title>
               <TextCard>{timeDifferenceMessage}</TextCard>
               <TextCard></TextCard>
           </TextContainer>
         </TitleContainer>
    </Container>
   )
  }

  export default MyVideoComponent;