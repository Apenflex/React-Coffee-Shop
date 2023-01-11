
import './ourCoffeeFilter.scss'

const OurCoffeeFilter = () => {
    return (
        <div className="our-coffee-filter">
            <div className="container">
                <div className="our-coffee-filter-block">
                    <div className="our-coffee-filter-input">
                        <span className="our-coffee-filter-input-text">Lookiing for</span>
                        <input type="text" placeholder="start typing here..." />
                    </div>
                    <div className="our-coffee-filter-buttons">
                        <span className="our-coffee-filter-buttons-text">Or filter</span>
                        <div className="our-coffee-filter-buttons-block">
                            <button className="our-coffee-filter-buttons-block-btn btn btn-active">Brazil</button>
                            <button className="our-coffee-filter-buttons-block-btn btn">Kenya</button>
                            <button className="our-coffee-filter-buttons-block-btn btn">Columbia</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCoffeeFilter