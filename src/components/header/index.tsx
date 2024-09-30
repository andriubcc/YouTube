import { 
    Container,
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon, 
    SearchContainer, 
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton
 } from "./styles";

import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/SearchIcon.png';
import MicIcon from '../../assets/Microfone.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import Dropdown from "../dropdown";

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void 
}

function Header({ openMenu, setOpenMenu }: IProps ) {
    const { login, user, searchVideos } = useContext(UserContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [ title, setTitle] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };
    
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false); 
            }
        };
        
        useEffect(() => {
            setDropdownOpen(false);
        },[location.pathname])
    

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, []);

    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer>
               <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                 <ButtonIcon alt="" src={HamburguerIcon} />
               </ButtonContainer>
               <img  style={{ cursor: "pointer", width: "100px" }} alt="" src={Logo} />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                  <SearchInput placeholder="Pesquisar" type="text"  value={title} onChange={(e) => setTitle(e.target.value)}/>
                </SearchInputContainer>
                <SearchButton onClick={() => {searchVideos(title); navigate('/search')}}>
                    <ButtonIcon  alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}  />
                </ButtonContainer>
            </SearchContainer> 

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon}  />
                </ButtonContainer>
                
                {login? 
                <>
                    <ButtonContainer onClick={toggleDropdown} margin='0 0 0 10px'>
                        {user.nome && user.nome[0] && user.nome[0].toUpperCase()}
                    </ButtonContainer>
                    {dropdownOpen && (
                        <div ref={dropdownRef}><Dropdown/></div>
                    )}
                </>
                
                :

                <button onClick={() => navigate('/signup')}>Fazer Login</button>
                }
            </HeaderButton>
        </Container>
    )
}

export default Header;