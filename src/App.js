import React, { Component } from 'react';
import FormCreate from './components/FormCreate';
import NotesList from './components/NotesList';
import CategoriesList from './components/CategoriesList';
import './assets/App.css';
import './assets/index.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            categories: []
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

    addCategory(categoryName) {
        const newCategoriesArray = [...this.state.categories, categoryName];
        const newState = {...this.state, categories:newCategoriesArray};
        this.setState(newState);
    }

    render(){
        return (
            <section className="contents">
                <FormCreate createNote={this.createNote.bind(this)}/>
                <div className="contents-main">
                    <CategoriesList
                        categories={this.state.categories} 
                        addCategory={this.addCategory.bind(this)}
                    />
                    <NotesList
                        notes={this.state.notes}
                        deleteNote={this.deleteNote.bind(this)}
                    />
                </div>
            </section>
        );
    }
}

export default App;