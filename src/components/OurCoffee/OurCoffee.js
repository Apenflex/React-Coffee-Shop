import OurCoffeeHeader from "../ourCoffeeHeader/OurCoffeeHeader";
import AboutOurBeans from "../aboutOurBeans/AboutOurBeans";
import OurCoffeeFilter from "../ourCoffeeFilter/OurCoffeeFilter";
import OurCoffeeList from "../ourCoffeeList/OurCoffeeList";
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