import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link
} from "react-router-dom";

import HeaderNav from '../headerNav/HeaderNav'

import Home from "../homePage/Home";
import OurCoffee from "../ourCoffee/OurCoffee";
import AboutIt from "../aboutIt/AboutIt";
import ForYourPleasure from "../forYourPleasure/ForYourPleasure";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coffee: [
                {
                    name: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: 6.99,
                },
                {
                    name: 'AROMISTICO Coffee 2 kg',
                    country: 'Brazil',
                    price: 13.89,
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
                {
                    name: 'AROMICO Coffee 3 kg',
                    country: 'Kenya',
                    price: 11.98,
                },
                {
                    name: 'AROMICO Coffee 3 kg',
                    country: 'Columbia',
                    price: 16.49,
                },
                {
                    name: 'AROMICO Coffee 3 kg',
                    country: 'Columbia',
                    price: 15.89,
                },
            ],
            term: '',
            filter: "",
            cardData: {},
        }
    }

    onFilterSelect = (filter) => {
        this.setState((state) => {
            return {
                filter: filter === state.filter ? "" : filter,
            }
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    searchCoffee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
            // return item.name.indexOf(term) > -1;
        });
    };

    filterCoffeeCountry = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter((item) => item.country === 'Brazil');
            case 'Kenya':
                return items.filter((item) => item.country === 'Kenya');
            case 'Columbia':
                return items.filter((item) => item.country === 'Columbia');
            default:
                return items;
        }
    };

    onClickCard = (country, price) => {
        this.setState({
            cardData: {
                country: country,
                price: price,
            }
        })
    }

    render() {
        const { coffee, term, filter, cardData } = this.state;
        const visibleData = this.filterCoffeeCountry(this.searchCoffee(coffee, term), filter);
        // console.log(visibleData);

        return (
            <div className="app">
                <Router>
                    <HeaderNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/our-coffee"
                            element={
                                <OurCoffee
                                    coffee={visibleData}
                                    filter={filter}
                                    onFilterSelect={this.onFilterSelect}
                                    onUpdateSearch={this.onUpdateSearch}
                                    onClickCard={this.onClickCard} />}
                        />
                        <Route path="/our-coffee/about-it" element={<AboutIt cardData={cardData} />} />
                        <Route path="/for-your-pleasure" element={<ForYourPleasure coffee={coffee} />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}
export default App;