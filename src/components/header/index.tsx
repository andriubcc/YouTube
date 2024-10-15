import {
    ButtonContainer,
    ButtonIcon,
    Container,
    Logo,
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    LinkLogo,
    LoginContainer,
    LoginButton,
    Span,
    LoginIcon,
    ClearButton,
    CloseImg,
    SearchButtonResponsive,
    BackButton
  } from "./styles";
  import Menu from '../../assets/menu.png'
  import Logoyt from '../../assets/logoyoutube.png'
  import Lupa from '../../assets/search.png'
  import Mic from '../../assets/microfone.png'
  import LoginIconPng from '../../assets/login-icon.png'
  import CloseIcon from '../../assets/close.png'
  import BackButtonIcon from '../../assets/voltar.png'
  import { useMenuContext } from "../../contexts/usercontext";
  import { useNavigate, useLocation } from "react-router-dom";
  import { useContext, useRef, useState, useEffect } from "react";
  import { UserContext } from "../../context/userContext";
  import { useSearchContext } from "../../contexts/searchContext";
import Dropdown from "../dropdown";
  
  
  
  const Header: React.FC = () => {
  
    const { openMenu, setOpenMenu } = useMenuContext();
     
    const [clearButton, setClearButton] = useState(false)
  
    const [openSearch, setOpenSearch] = useState(false)
  
    const inputRef = useRef<HTMLInputElement>(null);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    
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
  
    const Search = () => {
      setOpenSearch(true)
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  
  
    const navigate = useNavigate();
  
  
    const { login, user } = useContext(UserContext)
  
    const {  setSearch } = useSearchContext()
  
    const [inputValue, setInputValue] = useState('')
  
    function handleInput(inputValue: string) {
      setInputValue(inputValue)
      if (inputValue === '') {
        setClearButton(false)
      } else (
        setClearButton(true)
      )
    }
  
  
    const clearInput = () => {
      setInputValue('')
      setClearButton(false)
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  
  
  
    return (
      <Container>
  
        <LogoContainer>
  
          <ButtonContainer style={{position: 'fixed', top: '0.2rem', left: '1rem'}} id="menu" onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
            <ButtonIcon alt="logo menu" src={Menu} />
          </ButtonContainer>
  
          <LinkLogo style={{position: 'fixed', top: '-0.2rem', left: '4rem'}} to='/'>
            <Logo alt="logo youtube" src={Logoyt} />
          </LinkLogo>
  
        </LogoContainer>
  
        <SearchButtonResponsive onClick={Search}>
          <ButtonIcon alt="ícone lupa" src={Lupa} />
        </SearchButtonResponsive>
  
        <SearchContainer openSearch={openSearch}>
  
          <BackButton openSearch={openSearch} onClick={() => setOpenSearch(false)}>
            <img alt="Botão voltar" src={BackButtonIcon} style={{ width: '20px' }} />
          </BackButton>
  
          <SearchInputContainer>
            <SearchInput
              ref={inputRef}
              value={inputValue}
              placeholder="Pesquisar"
              onChange={(e) => {
                handleInput(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(inputValue)
                  navigate('/search')
                  setOpenSearch(false)
                }
              }}
            />
            <ClearButton
              clearButton={clearButton}
              onClick={clearInput}
            >
  
              <CloseImg src={CloseIcon} />
  
            </ClearButton>
  
          </SearchInputContainer>
  
          <SearchButton
            onClick={() => {
              if (inputValue.trim() === '') {
                alert('Digite alguma palavra chave antes de tentar pesquisar')
                return;
              }
              setSearch(inputValue)
              navigate('/search')
            }}
          >
            <ButtonIcon alt="ícone lupa" src={Lupa} />
          </SearchButton>
  
          <ButtonContainer style={{position: 'fixed', top: '0.4rem', right: '55rem'}} margin='0 0 0 10px'>
            <ButtonIcon alt="ícone microfone" src={Mic} />
          </ButtonContainer>
  
  
        </SearchContainer>
  
        {login? 
            <>
                <ButtonContainer style={{position: 'fixed', top: '0.4rem', right: '1rem'}} id="user" onClick={toggleDropdown} margin='0 0 0 10px'>
                    {user.nome && user.nome[0] && user.nome[0].toUpperCase()}
                </ButtonContainer>
                {dropdownOpen && (
                    <div ref={dropdownRef}><Dropdown isOpen/></div>
                )}
            </>
          :
          <LoginContainer onClick={() => navigate('/signup')}>
            <LoginButton>
              <LoginIcon alt="Login Icon" src={LoginIconPng} />
              <Span>Fazer login</Span>
            </LoginButton>
          </LoginContainer>
        }
  
      </Container>
    )
  }
  
  export default Header;