
import { Link } from 'react-router-dom';
import {useState} from 'react';

// icons
import {FiMenu} from 'react-icons/fi';
import {CgCloseR } from 'react-icons/cg';

//css
import './nav.scss';

const NavLinks = ()=> {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
        };

    const closeMenu = () => {
        setOpen(!open);
    };
    
    return (
        <nav className="navBar wrapper">
           <Link to="/" className="logo">
               Astro + Yoga
            </Link>

            <div onClick={handleClick}className="nav-icon">
                {open ? <CgCloseR /> : <FiMenu />}
            </div>

            <ul className={open? 'menu-items active' : 'menu-items'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home </Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/services" className="nav-link" onClick={closeMenu}>
                        Services
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link to = "/about" className="nav-link" onClick={closeMenu}>
                        about
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={closeMenu}>
                        contact
                    </Link>
                </li>
            </ul>

            
        </nav>
       
    );
}
export default NavLinks;