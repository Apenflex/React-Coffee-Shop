import { Link } from "react-router-dom";

import coffeBeamWhite from '../../resources/img/coffee-beam-white.png'
import './mainBlockHome.scss'

const MainBlockHome = () => {
    return (
        <section className='main-section'>
            <div className="container">
                <div className="main-page-header-block">
                    <h1 className="main-page-header">Everything You Love at1 Coffee</h1>
                    <div className="img">
                        <img src={coffeBeamWhite} alt="coffeBeamWhite" />
                    </div>
                    <p className="main-page-header-text">We makes every day full of energy and taste</p>
                    <p className='main-page-header-subtitle'>Want to try our beans?</p>
                    <Link to='/our-coffee' className="more btn">More</Link>
                </div>
            </div>
        </section>
    )
}

export default MainBlockHome