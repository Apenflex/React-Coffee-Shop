import OurCoffeeHeader from "../OurCoffeeHeader/OurCoffeeHeader";
import AboutOurBeans from "../AboutOurBeans/AboutOurBeans";
import OurCoffeeFilter from "../OurCoffeeFilter/OurCoffeeFilter";
import OurCoffeeList from "../OurCoffeeList/OurCoffeeList";
import Footer from "../footer/Footer";

const OurCoffee = ({ coffee, filter, onFilterSelect, onUpdateSearch, onClickCard }) => {
    // console.log(filter);
    return (
        <>
            <OurCoffeeHeader />
            <AboutOurBeans />
            <OurCoffeeFilter
                filter={filter}
                onFilterSelect={onFilterSelect}
                onUpdateSearch={onUpdateSearch} />
            <OurCoffeeList coffee={coffee}
                onClickCard={onClickCard} />
            <Footer />
        </ >
    )
}

export default OurCoffee;