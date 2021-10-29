import React, { Component } from 'react';
import FormCreate from './components/FormCreate';
import NotesList from './components/NotesList';
import CategoriesList from './components/CategoriesList';
import './assets/App.css';
import './assets/index.css';
import Categories from './assets/data/Categories';
import NotesArray from './assets/data/Notes';
class App extends Component {
    constructor() {
        super();
        this.categories = new Categories();
        this.notes = new NotesArray();
    }

    render(){
        return (
            <section className="contents">
                <FormCreate
                    categories={this.categories}
                    createNote={this.notes.createNote.bind(this.notes)}
                />
                <div className="contents-main">
                    <CategoriesList
                        categories={this.categories}
                        addCategory={this.categories.addCategory.bind(this.categories)}
                    />
                    <NotesList
                        notes={this.notes}
                        deleteNote={this.notes.deleteNote.bind(this.notes)}
                    />
                </div>
            </section>
        );
    }
}

export default App;