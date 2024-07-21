import { 
    ButtonIcon,
    Container,
    MenuItem, Span, LLC
 } from "./styles";
 import { items1, items2, items3, items4 } from "./items"
import { useNavigate } from "react-router-dom";


 

 
 interface IProps {
    openMenu: boolean;
 }

function Menu({ openMenu }: IProps) {
    const navigate = useNavigate();


    return (
        <Container openMenu={openMenu}>
              {items1.map((item) => (
                <MenuItem  openMenu={openMenu} onClick={() => navigate(item.link)}>
                <ButtonIcon alt="" src={item.icon}/>
                <span>{item.name}</span>
                </MenuItem>
))}
    <div className="divider"></div>
     <Span openMenu={openMenu}><span>Você</span></Span>
                {items2.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                <ButtonIcon alt="" src={item.icon}/>
                <span>{item.name}</span>
                </MenuItem>
              ))}
              <div className="divider"></div>
              <Span openMenu={openMenu}><span>Explorar</span></Span>
              {items3.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                <ButtonIcon alt="" src={item.icon}/>
                <span>{item.name}</span>
                </MenuItem>
              ))}
              <div className="divider"></div>
              {items4.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                <ButtonIcon alt="" src={item.icon}/>
                <span>{item.name}</span>
                </MenuItem>
              ))}
              <div className="divider-1"></div>
              <LLC openMenu={openMenu}>
               <span className="menu-footer">About Press Copyright
                 Contact Us Creators 
                 Advertise Developers<br/>
                Terms Privacy <br/>
                Policy & Safety <br/>
                How YouTube works <br/>
                Test new features <br/>
                <br/>
                © 2024 Google LLC</span>
              </LLC>

        </Container>
    )
}

export default Menu;