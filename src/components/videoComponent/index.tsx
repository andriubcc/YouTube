import { Container, ImageBanner, TextContainer,
     TitleContainer, ChannelImage, Title, TextCard } from "./styles";

import Bonjour from "../../assets/bonjour.png"
import Kay from "../../assets/kay.png"

function VideoComponent() {
    return (
        <Container>
          <ImageBanner src={Bonjour}/>
          <TitleContainer>
            <ChannelImage src={Kay}/>
            <TextContainer>
                <Title>Kayblack - Bonjour (VIDEO CLIPE OFICIAL)</Title>
                <TextCard>Real Kayblack</TextCard>
                <TextCard>29 mi de visualizações  há 1 ano</TextCard>
            </TextContainer>
          </TitleContainer>
        </Container>
    )
}

export default VideoComponent;