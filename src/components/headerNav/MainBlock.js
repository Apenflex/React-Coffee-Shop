import HeaderNav from '../header/HeaderNav'

import coffeBeamWhite from '../../resources/img/coffee-beam-white.png'
import './mainBlock.scss'

const MainBlock = () => {
    return (
        <section className='main-section'>
            <div className="container">
                <HeaderNav />
                <div className="main-page-header-block">
                    <h1 className="main-page-header">Everything You Love About Coffee</h1>
                    <div className="img">
                        <img src={coffeBeamWhite} alt="coffeBeamWhite" />
                    </div>
                    <p className="main-page-header-text">We makes every day full of energy and taste</p>
                    <p className='main-page-header-subtitle'>Want to try our beans?</p> 
                    <a href='/' className="more btn">More</a>
                </div>
            </div>
        </section>
    )
}

export default MainBlock