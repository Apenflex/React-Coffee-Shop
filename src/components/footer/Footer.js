
import headerFooter from '../../resources/img/coffee-beam-logo-footer.png'
import coffeeBeamBlack from '../../resources/img/coffee-beam-black.png'

import '../footer/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer-nav">
                    <ul className="footer-menu">
                        <img src={headerFooter} alt="coffee-beam-logo" />
                        <li><a href="/">Coffee house</a></li>
                        <li><a href="/about">Our coffee</a></li>
                        <li><a href="/contact">For your pleasure</a></li>
                    </ul>
                </nav>
                <div className="img"><img src={coffeeBeamBlack} alt="coffee-Beam-Black" /></div>
            </div>
        </footer>
    )
}

export default Footer;
