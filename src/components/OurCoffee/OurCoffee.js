

import OurCoffeeHeader from "../OurCoffeeHeader/OurCoffeeHeader";
import AboutOurBeans from "../AboutOurBeans/AboutOurBeans";
import OurCoffeeFilter from "../OurCoffeeFilter/OurCoffeeFilter";
import OurCoffeeList from "../OurCoffeeList/OurCoffeeList";
import Footer from "../footer/Footer";

const OurCoffee = ({data}) => {
    
    // console.log(data);
    return (
        <>
            <OurCoffeeHeader />
            <AboutOurBeans />
            <OurCoffeeFilter />
            <OurCoffeeList data={data} />
            <Footer />
        </ >
    
    )
}

export default OurCoffee;