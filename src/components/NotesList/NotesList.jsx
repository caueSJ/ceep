import React from 'react';
import { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import './NotesList.css';

class NotesList extends Component {
    render(){
        return(
            <ul className="notes-list">
                {this.props.notes.map((category, index) => {
                    return (
                        <li key={index} className="notes-list_item">
                            <NoteCard title={category.title} text={category.text} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NotesList;