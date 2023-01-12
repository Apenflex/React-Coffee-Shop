import { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import Header from '../HeaderNav/HeaderNav'

import Home from "../HomePage/Home";
import OurCoffee from "../OurCoffee/OurCoffee";
import ForYourPleasure from "../ForYourPleasure/ForYourPleasure";


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
                // {
                //     name: 'AROMISTICO Test 2 kg',
                //     country: 'Columbia',
                //     price: 101.01,
                // },
            ],
            term: '',
            filter: "",
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

    searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
            // return item.name.indexOf(term) > -1;
        });
    };
    
    render() {
        const { coffee, term } = this.state;
        const visibleData = this.searchEmployees(coffee, term);
        return (
            <div className="app">
                <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                        <Route path="/our-coffee"
                            element={
                                <OurCoffee
                                    coffee={visibleData}
                                    onFilterSelect={this.onFilterSelect}
                                    onUpdateSearch={this.onUpdateSearch} />}
                        />
                    <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
                </Routes>
                </Router>
            </div>
        );
    }    
}
export default App;