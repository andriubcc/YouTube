import Categories from "../../components/categories";
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

interface IProps {
    openMenu: boolean;
}

function Home({openMenu}: IProps) {
    return (
     <div>
        <Categories/>    
        <Container openMenu={openMenu}>
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        </Container>
     </div>
    )
}

export default Home;