import { Link, useResolvedPath } from "react-router-dom";

import ourBestCoffee3 from '../../resources/img/our-best-coffee3.png'

import './ourCoffeeList.scss';



const OurCoffeeList = ({ coffee, onClickCard }) => {
    const url = useResolvedPath("").pathname;
    const coffeeCard = coffee.map((item, i) => {
        
        return (
            <Link to={`${url}/about-it`}
                className="our-coffee-list-block-item"
                key={i}
                onClick={() => onClickCard(item.country, item.price)}>  
                <div className="our-coffee-list-block-item-img">
                    <img src={ourBestCoffee3} alt="ourBest-item-img-coffee" />
                </div>
                <div className="our-coffee-list-block-title">{item.name}</div>
                <div className="our-coffee-list-block-country">{item.country}</div>
                <div className="our-coffee-list-block-price">{`${item.price + '$'}`}</div>
            </Link>
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