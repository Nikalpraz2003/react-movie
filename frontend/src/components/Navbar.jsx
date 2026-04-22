import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "../css/Navbar.css";

function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();
    
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">🎬 Movie Hub</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Favorites" className="nav-link">Favorites</Link>
            <button onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
        </div>
    </nav>
}

export default Navbar