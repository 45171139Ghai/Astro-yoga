

import { Link } from 'react-router-dom';

// css
import './footer.scss';

const Footer = () => {
    return (

        <footer className="footer-container">
                
                <nav className="footer-padding wrapper">
                    <div className="name email-container">
                            <a href="mailto:chisholmmartha@gmail.com" className="logo-link">chisholmmartha@gmail.com</a>
                    </div>

                    <ul className = "links links-footer">
                        <li><Link to="/" className="a" href="#">Home</Link></li>
                        <li><Link to="/contact" className="a" href="#">Contact</Link></li>
                        <li><Link to="/about" className="a" href="#">About</Link></li>
                    </ul>
                </nav>
        </footer> 
   );

};

export default Footer;


