import OurCoffeeHeader from "../OurCoffeeHeader/OurCoffeeHeader";
import Footer from "../footer/Footer";

import AboutItImg from '../../resources/img/aboutIt-img.jpg'
import coffeeBeamBlack from '../../resources/img/coffee-beam-black.png'

import './aboutIt.scss';

const AboutIt = ({cardData}) => {
    // console.log(cardData);
    const {country, price} = cardData;

    return (
        <>
            <OurCoffeeHeader />
            <section className="about-it">
                <div className="container">
                    <div className="about-it-block">
                        <div className="about-it-block__img">
                            <img src={AboutItImg} alt="about-it" />
                        </div>
                        <div className="about-it-block__content">
                            <h2 className="title">About it</h2>
                            <div className="img"><img src={coffeeBeamBlack} alt="coffee-Beam-Black" /></div>
                            <div className="country"><span>Country:</span> {country}</div>
                            <div className="description">
                                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="price">Price: <span>{price}$</span></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutIt;