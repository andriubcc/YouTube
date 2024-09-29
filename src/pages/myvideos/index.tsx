import MyVideoComponent from "../../components/myvideoscomponent";
import { Container, MyVideosContainer } from "./styles";

interface IProps {
    openMenu: boolean
}

function MyVideos({openMenu}: IProps){
    return (
        <Container>
            <MyVideosContainer>
                <MyVideoComponent openMenu={openMenu}/>
            </MyVideosContainer>
        </Container>
        
    )
}

export default MyVideos;