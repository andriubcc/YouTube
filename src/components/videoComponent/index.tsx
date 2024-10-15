import { Banner, ChannelContainer, ChannelImage, Container, TextCard, TextContainer, Title, TitleContainer, InfoContainer, TextInfoContainer } from "./styles";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
  description: string
}

function VideoComponent(props : Props) {
  return (
    <Container>
      <Banner style={{backgroundImage: `url(${props.thumbnail})`}}></Banner>
      <InfoContainer>
        <ChannelContainer>
          <ChannelImage>
            {props.channelImage}
          </ChannelImage>
        </ChannelContainer>
        <TextInfoContainer>
          <TitleContainer>
            <Title>{props.title}</Title>
          </TitleContainer>
          <TextContainer>
            <TextCard>{props.channelName}</TextCard>
            <TextCard>{props.details}</TextCard>
          </TextContainer>
        </TextInfoContainer>
      </InfoContainer>
    </Container>
  )
}

export default VideoComponent;