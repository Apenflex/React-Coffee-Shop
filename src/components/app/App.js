import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import Header from '../headerNav/HeaderNav'

import Home from "../Home/Home";
import OurCoffee from "../OurCoffee/OurCoffee";
import ForYourPleasure from "../ForYourPleasure/ForYourPleasure";


const App = () => {
    
    const coffee = [
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Brazil',
            price: 6.99,
        },
        {
            name: 'AROMISTICO Coffee 2 kg',
            country: 'Brazil',
            price: 13.90,
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Kenya',
            price: 7.99,
        },
        {
            name: 'AROMISTICO Coffee 2 kg',
            country: 'Kenya',
            price: 15.98,
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Columbia',
            price: 6.49,
        },
        {
            name: 'AROMISTICO Coffee 2 kg',
            country: 'Columbia',
            price: 12.89,
        },
    ]
    
    return (
        <div className="app">
            <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/our-coffee" element={<OurCoffee data={coffee} />} />
                <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
            </Routes>
            </Router>
        </div>
    );
}
export default App;