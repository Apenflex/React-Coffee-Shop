
import ourBestCoffee3 from '../../resources/img/our-best-coffee3.png'

import './ourCoffeeList.scss';

const OurCoffeeList = ({data}) => {
    
    console.log(data);

    return (
        <section className='our-coffee-list'>
            <div className="container">
                <div className="our-coffee-list-block">
                    <a href='/' className="our-coffee-list-block-item">
                        <div className="our-coffee-list-block-item-img">
                            <img src={ourBestCoffee3} alt="ourBest-item-img-coffee" />
                        </div>
                        <div className="our-coffee-list-block-title">AROMISTICO Coffee 1 kg</div>
                        <div className="our-coffee-list-block-country">Brazil</div>
                        <div className="our-coffee-list-block-price">10.73$</div>
                    </a>
                    <a href='/' className="our-coffee-list-block-item">
                        <div className="our-coffee-list-block-item-img">
                            <img src={ourBestCoffee3} alt="ourBest-item-img-coffee" />
                        </div>
                        <div className="our-coffee-list-block-title">AROMISTICO Coffee 1 kg</div>
                        <div className="our-coffee-list-block-country">Brazil</div>
                        <div className="our-coffee-list-block-price">10.73$</div>
                    </a>
                    <a href='/' className="our-coffee-list-block-item">
                        <div className="our-coffee-list-block-item-img">
                            <img src={ourBestCoffee3} alt="ourBest-item-img-coffee" />
                        </div>
                        <div className="our-coffee-list-block-title">AROMISTICO Coffee 1 kg</div>
                        <div className="our-coffee-list-block-country">Brazil</div>
                        <div className="our-coffee-list-block-price">10.73$</div>
                    </a>
                    <a href='/' className="our-coffee-list-block-item">
                        <div className="our-coffee-list-block-item-img">
                            <img src={ourBestCoffee3} alt="ourBest-item-img-coffee" />
                        </div>
                        <div className="our-coffee-list-block-title">AROMISTICO Coffee 1 kg</div>
                        <div className="our-coffee-list-block-country">Brazil</div>
                        <div className="our-coffee-list-block-price">10.73$</div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default OurCoffeeList;