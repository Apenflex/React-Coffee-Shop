import OurCoffeeHeader from "../OurCoffeeHeader/OurCoffeeHeader";
import AboutOurBeans from "../AboutOurBeans/AboutOurBeans";
import OurCoffeeFilter from "../OurCoffeeFilter/OurCoffeeFilter";
import OurCoffeeList from "../OurCoffeeList/OurCoffeeList";
import Footer from "../footer/Footer";

const OurCoffee = ({ coffee, filter, onFilterSelect, onUpdateSearch }) => {
    // console.log(filter);
    return (
        <>
            <OurCoffeeHeader />
            <AboutOurBeans />
            <OurCoffeeFilter
                filter={filter}
                onFilterSelect={onFilterSelect}
                onUpdateSearch={onUpdateSearch}/>
            <OurCoffeeList coffee={coffee} />
            <Footer />
        </ >
    )
}

export default OurCoffee;