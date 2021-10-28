import React, { Component } from 'react';
import "./NoteCard.css";

class NoteCard extends Component {
    render() {
        return (
            <section className="note-card">
                <header className="note-card_header">
                    <h3 className="note-card_title">Note Title 1</h3>
                </header>
                <p className="note-card_text">Note description...</p>
            </section>
        );
    }
}

export default NoteCard;