import MyVideoComponent from "../../components/myvideoscomponent";
import { Container, MyVideosContainer } from "./styles";

function MyVideos(){
    return (
        <Container>
            <MyVideosContainer>
                <MyVideoComponent/>
            </MyVideosContainer>
        </Container>
        
    )
}

export default MyVideos;