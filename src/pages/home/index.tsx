import Categories from "../../components/categories";
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

interface IProps {
    openMenu: boolean;
}

const videos = [
    { 
        image: '',
        title: 'Kayblack - Bonjour (VIDEO CLIPE OFICIAL)',
        channel: 'Real Kayblack',
        views: '30 mi',
        time: 'há 1 ano'
    },

    { 
        image: '',
        title: 'Kayblack - Bonjour (VIDEO CLIPE OFICIAL)',
        channel: 'Real Kayblack',
        views: '30 mi',
        time: 'há 1 ano'
    },
    
    { 
        image: '',
        title: 'Kayblack - Bonjour (VIDEO CLIPE OFICIAL)',
        channel: 'Real Kayblack',
        views: '30 mi',
        time: 'há 1 ano'
    },

    { 
        image: '',
        title: 'Kayblack - Bonjour (VIDEO CLIPE OFICIAL)',
        channel: 'Real Kayblack',
        views: '30 mi',
        time: 'há 1 ano'
    },

    { 
        image: '',
        title: 'Kayblack - Bonjour (VIDEO CLIPE OFICIAL)',
        channel: 'Real Kayblack',
        views: '30 mi',
        time: 'há 1 ano'
    }
]

function Home({openMenu}: IProps) {
    return (
     <div>
        <Categories/>    
        <Container openMenu={openMenu}>
            {videos.map((video) => (
                <VideoComponent video={video} />
            ))}
        </Container>
     </div>
    )
}

export default Home;