import { Link } from "react-router-dom";

import headerLogo from '../../resources/img/coffee-beam-logo.png'

import './headerNav.scss'

const HeaderNav = () => {
    return (
        <div className="container">
            <nav className="header-nav">
                <ul className="header-menu">
                    <Link to="/"><img src={headerLogo} alt="coffee-beam-logo" /></Link>
                    <li><Link to="/">Coffee house</Link></li>
                    <li><Link to="/our-coffee">Our coffee</Link></li>
                    <li><Link to="/for-your-pleasure">For your pleasure</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderNav;