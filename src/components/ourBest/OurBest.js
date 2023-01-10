
import ourBestCoffee1 from '../../resources/img/our-best-coffee.png'
import ourBestCoffee2 from '../../resources/img/our-best-coffee2.png'
import ourBestCoffee3 from '../../resources/img/our-best-coffee3.png'
import './ourBest.scss';

const OurBest = () => {
    return (
        <div className="ourBest">
            <div className="container">
                <h2 className="ourBest-title">Our best</h2>
                <div className="ourBest-wrapper">
                    <a href='/' className="ourBest-item">
                        <div className="ourBest-item-img">
                            <img src={ourBestCoffee1} alt="ourBest-item-img-coffee" />
                        </div>
                        <div className="ourBest-item-title">Solimo Coffee Beans 2 kg</div>
                        <div className="ourBest-item-price">10.73$</div>
                    </a>
                    <a href='/' className="ourBest-item">
                        <div className="ourBest-item-img">
                            <img src={ourBestCoffee2} alt="ourBest-item-img-coffee" />
                        </div>
                        <div className="ourBest-item-title">Presto Coffee Beans 1 kg</div>
                        <div className="ourBest-item-price">15.99$</div>
                    </a>
                    <a href='/' className="ourBest-item">
                        <div className="ourBest-item-img">
                            <img src={ourBestCoffee3} alt="ourBest-item-img-coffee" />
                        </div>
                        <div className="ourBest-item-title">AROMISTICO Coffee 1 kg</div>
                        <div className="ourBest-item-price">6.99$</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OurBest;