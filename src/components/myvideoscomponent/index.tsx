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


   return (
       <Container>
         <ImageBanner  src={URL}/>
         <TitleContainer >
           <ChannelImage>{user.nome && user.nome[0] && user.nome[0].toUpperCase()}</ChannelImage>
           <TextContainer>
               <Title>{title}</Title>
               <TextCard>há {currentDate}</TextCard>
               <TextCard></TextCard>
           </TextContainer>
         </TitleContainer>
       </Container>
   )
}

export default MyVideoComponent;

// function getTimeDifferenceMessage(createdDate: any) {
//   // Verificar se createdDate é uma string ou Date e converter se necessário
//   const created = typeof createdDate === 'string' ? new Date(createdDate) : createdDate;

//   // Verificar se created é uma instância válida de Date
//   if (!(created instanceof Date) || isNaN(created.getTime())) {
//     console.error("Data de criação inválida passada para getTimeDifferenceMessage", createdDate);
//     return "Data inválida";
//   }

//   const dateNow = new Date();
//   const diffInSeconds = Math.floor((dateNow.getTime() - created.getTime()) / 1000);

//   const minutes = Math.floor(diffInSeconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);
//   const months = Math.floor(days / 30);
//   const years = Math.floor(months / 12);

//   if (minutes < 60) {
//     return menos de uma hora;
//   } else if (hours < 24) {
//     return há ${hours} ${hours === 1 ? 'hora' : 'horas'};
//   } else if (days < 30) {
//     return há ${days} ${days === 1 ? 'dia' : 'dias'};
//   } else if (months < 12) {
//     return há ${months} ${months === 1 ? 'mês' : 'meses'};
//   } else {
//     return há ${years} ${years === 1 ? 'ano' : 'anos'};
//   }
// }