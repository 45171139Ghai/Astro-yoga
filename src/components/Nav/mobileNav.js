import NavLinks from './navLinks';
import { RiMenu2Fill} from 'react-icons/ri';
import {CgCloseR } from 'react-icons/cg';
import {useState} from 'react';

import './mobile.scss';

const MobileNav = ()=> {
    const [open, setOpen] = useState(false);
    const hamburger =  <RiMenu2Fill className="menu-btn" onClick={()=>setOpen(!open)} />
    const closeBtn = <CgCloseR className="menu-btn" onClick={()=>setOpen(!open)} />
    

    return (  
        <nav className="mobile-container">
        
                {open ? closeBtn:hamburger}
                { open && < NavLinks />}
        </nav>
    );
}

export default MobileNav;