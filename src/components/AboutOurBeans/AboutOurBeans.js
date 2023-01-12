import AboutBeansPhoto from '../../resources/img/About-Our-Beans-Photo.png'
import coffeeBeamBlack from '../../resources/img/coffee-beam-black.png'

import './aboutOurBeans.scss'

const AboutOurBeans = () => {
    return (
        <section className="about-our-beans">
            <div className="container">
                <div className="about-our-beans__wrapper">
                    <div className="about-our-beans__photo">
                        <img src={AboutBeansPhoto} alt="beans" />
                    </div>
                    <div className="about-our-beans__content">
                        <h2 className="about-our-beans__title">About our beans</h2>
                        <div className="about-our-beans__img"><img src={coffeeBeamBlack} alt="coffee-Beam-Black" /></div>
                        <p className="about-our-beans__text">Extremity sweetness difficult behaviour he of.
                            On disposal of as landlord horrible. <br /><br /> Afraid at highly months do things on at.
                            Situation recommend objection do intention so questions. As greatly removed
                            calling pleased improve an. Last ask him cold feel met spot shy want. Children me
                            laughing we prospect answered followed. At it went is song that held help face.
                        </p>
                    </div>
                </div>
                <div className="about-our-beans__divider"></div>
            </div>
        </section>
    )
}

export default AboutOurBeans