import React from 'react';
import { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import './NotesList.css';

class NotesList extends Component {
    render(){
        return(
            <ul className="notes-list">
                {this.props.notes.map((note, index) => {
                    return (
                        <li key={index} className="notes-list_item">
                            <NoteCard 
                                title={note.title}
                                text={note.text}
                                cardIndex={index}
                                deleteNote={this.props.deleteNote}
                                category={note.category}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NotesList;