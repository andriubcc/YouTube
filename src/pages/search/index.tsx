import Categories from "../../components/categories";
import MyVideoComponent from "../../components/myvideoscomponent";
import { Container, MyVideosContainer } from "./styles";


interface IProps {
    openMenu: boolean;
}

function Search({openMenu}: IProps) {
    return (
     <div>
        <Categories/>    
        <Container>
            <MyVideosContainer>
                <MyVideoComponent openMenu={openMenu}/>
            </MyVideosContainer>
        </Container>
     </div>
    )
}

export default Search;