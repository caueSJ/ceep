import React, { Component } from 'react';
import "./FormCreate.css";

class FormCreate extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
        this.category = "";
        this.state = {categories:[]}
        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.categories.register(this._newCategories);
    }

    componentWillUnmount() {
        this.props.categories.unregister(this._newCategories);
    }

    // Function/property start with _ (underscore) means it is private.
    // This is only a convention, the JS don't understand this.

    _newCategories(categories) {
        this.setState({...this.state, categories});
    }
    
    _handleTitleChange(event)  {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleTextChange(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _handleCategoryChange(event) {
        event.stopPropagation();
        this.category = (event.target.value !== "Select Category") ? event.target.value : "";
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
    }

    render(){
        return(
            <form className="form-create" onSubmit={this._createNote.bind(this)}>
                <select
                    className="form-create_input"
                    onChange={this._handleCategoryChange.bind(this)}
                >
                    <option>Select Category</option>
                    {this.state.categories.map((category, index) => {
                        return <option key={index}>{category}</option>
                    })}
                </select>
                <input 
                    type="text"
                    placeholder="Title"
                    className="form-create_input"
                    onChange={this._handleTitleChange.bind(this)}
                />
                <textarea
                    className="form-create_input"
                    placeholder="Write your note..."
                    onChange={this._handleTextChange.bind(this)}
                />
                <button className="form-create_submit form-create_input">
                    Create Note
                </button>
            </form>
        );
    }
}

export default FormCreate;