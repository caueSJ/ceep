import React from 'react';
import { Component } from 'react';
import "./FormCreate.css";

class FormCreate extends Component {
    render(){
        return(
            <form className="form-create">
                <input 
                    type="text"
                    placeholder="Title"
                    className="form-create_input"
                />
                <textarea
                    className="form-create_input"
                    placeholder="Write your note..."
                />
                <button className="form-create_submit">
                    Create Note
                </button>
            </form>
        );
    }
}

export default FormCreate;