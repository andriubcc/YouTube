import { MenuProvider } from "./contexts/usercontext";
import { UserStorage } from "./context/userContext";
import Header from "./components/header";
import Menu from './components/menu/index'
import Library from "./pages/library";
import History from "./pages/history";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Upload from "./pages/upload";
import MyVideos from "./pages/myvideos";
import Search from "./pages/search";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ToDo from "./pages/to-do";
import { SearchProvider } from "./contexts/searchContext";

function App() {

  return (
    <BrowserRouter>
    <SearchProvider>
    <MenuProvider>
    <UserStorage>
    <div className="App">
     <Header />
     <div style={{ width: '100%', display: 'flex' }}>
      <Menu />
      <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/history" element={<History />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/myvideos" element={<MyVideos />}/>
            <Route path="/search" element={<Search />}/> 
            <Route path="/to-do" element={<ToDo />}/>
          </Routes>
      </div>
     </div>
    </div>
    </UserStorage>
    </MenuProvider>
    </SearchProvider>
    </BrowserRouter>
  );
}


// AIzaSyAqlxcE55FbYQsWX41C8_5W82OpWUhkipM 

export default App;
