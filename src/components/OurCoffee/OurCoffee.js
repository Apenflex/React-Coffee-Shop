import OurCoffeeHeader from "../OurCoffeeHeader/OurCoffeeHeader";
import AboutOurBeans from "../AboutOurBeans/AboutOurBeans";
import OurCoffeeFilter from "../OurCoffeeFilter/OurCoffeeFilter";
import OurCoffeeList from "../OurCoffeeList/OurCoffeeList";
import Footer from "../footer/Footer";

const OurCoffee = ({ coffee, onFilterSelect, onUpdateSearch }) => {
    
    return (
        <>
            <OurCoffeeHeader />
            <AboutOurBeans />
            <OurCoffeeFilter
                filter={coffee.filter}
                onFilterSelect={onFilterSelect}
                onUpdateSearch={onUpdateSearch}/>
            <OurCoffeeList coffee={coffee} />
            <Footer />
        </ >
    )
}

export default OurCoffee;