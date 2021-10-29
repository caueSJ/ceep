import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import './NotesList.css';

class NotesList extends Component {
    constructor() {
        super();
        this.state = {notes:[]};
        this._newNotes = this._newNotes.bind(this);
    }

    componentDidMount() {
        this.props.notes.register(this._newNotes);
    }

    componentWillUnmount() {
        this.props.notes.unregister(this._newNotes);
    }

    _newNotes(notes) {
        this.setState({...this.state, notes})
    }

    render(){
        return(
            <ul className="notes-list">
                {this.state.notes.map((note, index) => {
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