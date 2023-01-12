import { Component } from 'react';

import './ourCoffeeFilter.scss'

class OurCoffeeFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }
    // const { filter, onFilterSelect } = props;
    // console.log(filter);
    // const buttonsData = [
    //     { name: 'Brazil', label: 'Brazil' },
    //     { name: 'Kenya', label: 'Kenya' },
    //     { name: 'Columbia', label: 'Columbia' },
    // ];
    // const buttons = buttonsData.map(({name, label}) => {
    //     const active = filter === name;
    //     const clazz = active ? 'btn-active' : '';
    //     return (
    //         <button 
    //             className={`our-coffee-filter-buttons-block-btn btn ${clazz}`}
    //             type='button'
    //             key={name}
    //             onClick={() => onFilterSelect(name)} >
    //             { label }
    //         </button >
    //     );
    // });

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    };
    
    render() {
        // console.log(this.props);
        const { filter, onFilterSelect } = this.props;
        
        const buttonsData = [
            { name: 'Brazil', label: 'Brazil' },
            { name: 'Kenya', label: 'Kenya' },
            { name: 'Columbia', label: 'Columbia' },
        ];
        const buttons = buttonsData.map(({ name, label }) => {
            const active = filter === name;
            const clazz = active ? 'btn-active' : '';
            return (
                <button
                    className={`our-coffee-filter-buttons-block-btn btn ${clazz}`}
                    type='button'
                    key={name}
                    onClick={() => onFilterSelect(name)} >
                    {label}
                </button >
            );
        });

        return (
            <section className="our-coffee-filter">
                <div className="container">
                    <div className="our-coffee-filter-block">
                        <div className="our-coffee-filter-input">
                            <span className="our-coffee-filter-input-text">Lookiing for</span>
                            <input type="text"
                                placeholder="start typing here..."
                                value={this.state.term}
                                onChange={this.onUpdateSearch}/>
                        </div>
                        <div className="our-coffee-filter-buttons">
                            <span className="our-coffee-filter-buttons-text">Or filter</span>
                            <div className="our-coffee-filter-buttons-block">
                                {buttons}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurCoffeeFilter