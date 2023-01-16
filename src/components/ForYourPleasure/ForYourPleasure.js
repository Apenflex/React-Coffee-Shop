

import AboutOurGoods from '../../resources/img/about-our-goods-photo.png'
import coffeeBeamBlack from '../../resources/img/coffee-beam-black.png'
import ourBestCoffee3 from '../../resources/img/our-best-coffee3.png'
import Footer from '../footer/Footer';

import './forYourPleasure.scss';

const ForYourPleasure = ({ coffee }) => {
    console.log(coffee);
    const GoodsCoffeeCard = coffee.map((item, i) => {
        return (
            <div className="our-coffee-list-block-item" key={i}>
                <div className="our-coffee-list-block-item-img">
                    <img src={ourBestCoffee3} alt="ourBest-item-img-coffee" />
                </div>
                <div className="our-coffee-list-block-title">{item.name}</div>
                <div className="our-coffee-list-block-country">{item.country}</div>
                <div className="our-coffee-list-block-price">{`${item.price + '$'}`}</div>
            </div>
        )
    })

    return (
        <>
            <section className="for-your-pleasurre-main-block">
                <div className="container">
                    <h2 className="for-your-pleasurre-main-block-title">For your pleasure</h2>
                </div>
            </section>
            <section className="about-our-goods">
                <div className="container">
                    <div className="about-our-goods__wrapper">
                        <div className="about-our-goods__photo">
                            <img src={AboutOurGoods} alt="beans" />
                        </div>
                        <div className="about-our-goods__content">
                            <h2 className="about-our-goods__title">About our beans</h2>
                            <div className="about-our-goods__img"><img src={coffeeBeamBlack} alt="coffee-Beam-Black" /></div>
                            <p className="about-our-goods__text">Extremity sweetness difficult behaviour he of.
                                On disposal of as landlord horrible. <br /><br /> Afraid at highly months do things on at.
                                Situation recommend objection do intention so questions. As greatly removed
                                calling pleased improve an. Last ask him cold feel met spot shy want. Children me
                                laughing we prospect answered followed. At it went is song that held help face.
                            </p>
                        </div>
                    </div>
                    <div className="about-our-goods__divider"></div>
                </div>
            </section>
            <section className='our-coffee-list'>
                <div className="container">
                    <div className="our-coffee-list-block">
                        {GoodsCoffeeCard}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForYourPleasure;