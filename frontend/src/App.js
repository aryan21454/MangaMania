import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import MangaList from './components/MangaList/MangaList';
import { authActions } from './store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthStatus, refreshTokens } from './middleware/authMiddleware.js';

function App() {
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   const id = sessionStorage.getItem('id');
  // if (id)
  //  { dispatch(authActions.login());
  //  }
  // } , [])
  const isLoggedin = useSelector(state=> state.isLoggedin);
  useEffect(() => {
    dispatch(checkAuthStatus());

    const interval = setInterval(() => {
      dispatch(refreshTokens());
    }, 15 * 60 * 1000); // Refresh tokens every 15 minutes

    return () => clearInterval(interval);
  }, [dispatch]);

console.log(isLoggedin)

  
  return (
    <div className="  w-full  min-h-screen" >
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/home" element={ <Home/> }/>
        <Route  path="/aboutus" element={<About/>}/>
        <Route  path="/signin" element={<SignIn/>}/>
        <Route  path="/mangalist" element={<MangaList/>}/>
        <Route  path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    
    
    <Footer/>
    </div>
  );
}

export default App;
