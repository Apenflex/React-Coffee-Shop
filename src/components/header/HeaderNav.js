import headerLogo from '../../resources/img/coffee-beam-logo.png'

import './headerNav.scss'

const Header = () => {
    return (
        <header className="App-header">
            <nav className="header-nav">
                <ul className="header-menu">
                    <a href="/"><img src={headerLogo} alt="coffee-beam-logo" /></a>
                    <li><a href="/">Coffee house</a></li>
                    <li><a href="/about">Our coffee</a></li>
                    <li><a href="/contact">For your pleasure</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;