import { useContext } from "react";
import { UserContext } from "./contexts/usercontext";
import { UserStorage } from "./context/userContext";
import Header from "./components/header";
import Menu from './components/menu/index'
import Library from "./pages/library";
import History from "./pages/history";
import Home from "./pages/home";
import Login from "./pages/login";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    
  const {openMenu, setOpenMenu } = useContext(UserContext);

  return (
    <UserStorage>
    <BrowserRouter>
    <div className="App">
     <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
     <div style={{ width: '100%', display: 'flex' }}>
      <Menu openMenu={openMenu}/>
      <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box' }}>
          <Routes>
            <Route path="/" element={<Home openMenu={openMenu} />} />
            <Route path="/library" element={<Library />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
     </div>
    </div>
    </BrowserRouter>
    </UserStorage>
  );
}


// Deixar a tela de login no padrão (deixar bonita) - a fazer
// Implementar um dropdown menu no botao de login - feito, mas nao estilizei
// Criar a tela e a integraçao para cadastro de usuario
// Criar a tela e a integraçao para cadastro de video
// Implementaçao de pesquisa

export default App;
