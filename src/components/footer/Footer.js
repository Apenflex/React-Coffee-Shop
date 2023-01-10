import { Link } from "react-router-dom";

import headerFooter from '../../resources/img/coffee-beam-logo-footer.png'
import coffeeBeamBlack from '../../resources/img/coffee-beam-black.png'

import '../footer/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer-nav">
                    <ul className="footer-menu">
                        <Link to="/"><img src={headerFooter} alt="coffee-beam-logo" /></Link>
                        <li><Link to="/">Coffee house</Link></li>
                        <li><Link to="/our-coffee">Our coffee</Link></li>
                        <li><Link to="/for-your-pleasure">For your pleasure</Link></li>
                    </ul>
                </nav>
                <div className="img"><img src={coffeeBeamBlack} alt="coffee-Beam-Black" /></div>
            </div>
        </footer>
    )
}

export default Footer;
