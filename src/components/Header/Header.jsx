import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <nav>
                <NavLink className="header_link" to="/marketplace/">Главная</NavLink>
                <NavLink className="header_link" to="/marketplace/brand">Filtered Table</NavLink>
                <NavLink className="header_link" to="/marketplace/liked">Liked Product Table</NavLink>
            </nav>
        </div>
    );
}
export default Header;