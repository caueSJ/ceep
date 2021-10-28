import React from 'react';
import { Component } from 'react';
import FormCreate from './components/FormCreate';
import NotesList from './components/NotesList';
import './assets/App.css';
import './assets/index.css';
class App extends Component {
    render(){
        return (
            <section className="contents">
                <FormCreate/>
                <NotesList/>
            </section>
        );
    }
}

export default App;