import './css/App.css'
import Favorite from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from './contexts/MovieContext';
import { ThemeProvider } from './contexts/ThemeContext';
import NavBar from './components/Navbar';


function App() {
  return (
  <ThemeProvider>
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorite />} />
        </Routes>
      </main> 
    </MovieProvider>
  </ThemeProvider>
  );
}

export default App
