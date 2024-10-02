import Categories from "../../components/categories";
import SearchedVideoComponent from "../../components/searchvideocomponent";
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
                <SearchedVideoComponent openMenu={openMenu}/>
            </MyVideosContainer>
        </Container>
     </div>
    )
}

export default Search;