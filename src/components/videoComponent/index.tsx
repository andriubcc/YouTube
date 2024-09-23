import { Container, ImageVideo, TextContainer,
     TitleContainer, ChannelImage, Title, TextCard } from "./styles";

import Bonjour from "../../assets/bonjour.png"
import Kay from "../../assets/kay.png"

function VideoComponent({ video }: any) {
    return (
        <Container>
          <ImageVideo src={Bonjour}/>
          <TitleContainer>
            <ChannelImage src={Kay}/>
            <TextContainer>
                <Title>{video.title}</Title>
                <TextCard>{video.channnel}</TextCard>
                <TextCard>{video.views} de visualizações - há {video.time}</TextCard>
            </TextContainer>
          </TitleContainer>
        </Container>
    )
}

export default VideoComponent;