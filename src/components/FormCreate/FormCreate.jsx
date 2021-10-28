import React from 'react';
import { Component } from 'react';
import "./FormCreate.css";

class FormCreate extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
    }

    // Function/property start with _ (underscore) means it is private.
    // This is only a convention, the JS don't understand this.

    _handleTitleChange(event)  {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleTextChange(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text);
    }

    render(){
        return(
            <form className="form-create" onSubmit={this._createNote.bind(this)}>
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