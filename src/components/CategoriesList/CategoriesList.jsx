import React, { Component } from 'react';
import "./CategoriesList.css";

class CategoriesList extends Component {

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
                    {this.props.categories.map((category, index) => {
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