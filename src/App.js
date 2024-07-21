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

export default App;
