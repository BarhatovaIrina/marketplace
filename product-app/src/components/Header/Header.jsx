import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <nav>
                <NavLink className="header_link" to="/">Главная</NavLink>
                <NavLink className="header_link" to="/brand">Filtered Table</NavLink>
                <NavLink className="header_link" to="/liked">Liked Product Table</NavLink>
            </nav>
        </div>
    );
}
export default Header;