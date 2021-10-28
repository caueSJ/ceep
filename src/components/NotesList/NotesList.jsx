import React from 'react';
import { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import './NotesList.css';

class NotesList extends Component {
    render(){
        return(
            <ul className="notes-list">
                {Array.of('Job', 'Job', 'Studies').map((category, index) => {
                    return (
                        <li key={index} className="notes-list_item">
                            <NoteCard/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NotesList;