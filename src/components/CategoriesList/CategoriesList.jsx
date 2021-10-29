import React, { Component } from 'react';
import "./CategoriesList.css";

class CategoriesList extends Component {
    constructor() {
        super();
        this.state = {categories:[]};
        this._newCategories = this._newCategories.bind(this);
    }
    
    componentDidMount() {
        this.props.categories.register(this._newCategories);
    }

    componentWillUnmount() {
        this.props.categories.unregister(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories})
    }

    _handleInputEvent(event) {
        if (event.key === "Enter") {
            let categoryName = event.target.value;
            this.props.addCategory(categoryName);
        }
    }

    render() {
        return(
            <section className="categories">
                <ul className="categories_list">
                    {this.state.categories.map((category, index) => {
                        return (
                            <li key={index} className="categories_item">{category}</li>
                        );
                    })}
                </ul>
                <input
                    placeholder="Add Category"
                    type="text"
                    className="categories_input"
                    onKeyUp={this._handleInputEvent.bind(this)}
                />
            </section>
        );
    }
}

export default CategoriesList;