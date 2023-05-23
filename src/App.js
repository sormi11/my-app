// import logo from './logo.svg';
import './App.css';
import { Routes,Route, Link, BrowserRouter } from 'react-router-dom';

//import { globalStyles } from './constants';
import appstyle from './AppStyle.module.css'
// import LOGO from "./images/logo.svg"
import { Homepage } from "./homepage";
import { Apple } from "./apple";
import { Notfound } from "./notfound";
import { ThemeProvider } from '@emotion/react';
import { theme } from './style';


const App = () => (
  <>
  <ThemeProvider theme={theme}>
    
</ThemeProvider>

  {/* <img src={LOGO} alt="App Logo" /> */}
  {/* <img src={`${process.env.REACT_APP_HOSTED_URL} logo192.png`} alt="Site Logo" /> */}

  <BrowserRouter> 
    <div

    className={appstyle.navbarStyle}
    >
    <Link to="/"
    style={{marginLeft: 5,}}
    >Home</Link>
    <Link to="/apple"
    style={{marginLeft: 10,}}
    >Apple</Link>
    <Link to="/applet"
    style={{marginLeft: 10,}}>Applet</Link>
    </div>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/apple" element={<Apple/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
);

export default App;
