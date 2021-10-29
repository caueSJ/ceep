import React from 'react';
import { Component } from 'react';
import FormCreate from './components/FormCreate';
import NotesList from './components/NotesList';
import './assets/App.css';
import './assets/index.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        };
    }

    createNote(title, text) {
        const newNote = {title, text};
        const newNotesArray = [...this.state.notes, newNote]
        const newState = {
            notes: newNotesArray
        };
        this.setState(newState);
    }

    deleteNote(cardIndex) {
        let notesArray = this.state.notes;
        notesArray.splice(cardIndex, 1);
        this.setState({notes: notesArray})
    }

    render(){
        return (
            <section className="contents">
                <FormCreate createNote={this.createNote.bind(this)}/>
                <NotesList
                    notes={this.state.notes}
                    deleteNote={this.deleteNote.bind(this)}
                />
            </section>
        );
    }
}

export default App;