
import ourBestCoffee3 from '../../resources/img/our-best-coffee3.png'

import './ourCoffeeList.scss';

const OurCoffeeList = ({coffee}) => {
    
    const coffeeCard = coffee.map((item,i) => {
        return (
            <a href='/' className="our-coffee-list-block-item" key={i}>
                <div className="our-coffee-list-block-item-img">
                    <img src={ourBestCoffee3} alt="ourBest-item-img-coffee" />
                </div>
                <div className="our-coffee-list-block-title">{item.name}</div>
                <div className="our-coffee-list-block-country">{item.country}</div>
                <div className="our-coffee-list-block-price">{`${item.price + '$'}`}</div>
            </a>
        )
    })

    return (
        <section className='our-coffee-list'>
            <div className="container">
                <div className="our-coffee-list-block">
                    {coffeeCard}
                </div>
            </div>
        </section>
    )
}

export default OurCoffeeList;