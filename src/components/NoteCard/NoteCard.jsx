import React, { Component } from 'react';
import './NoteCard.css';
import deleteSvg from '../../assets/icons/delete.svg';

class NoteCard extends Component {
    
    delete() {
        const cardIndex = this.props.cardIndex;
        this.props.deleteNote(cardIndex);
    }
    
    render() {
        return (
            <section className="note-card">
                <header className="note-card_header">
                    <h3 className="note-card_title">{this.props.title}</h3>
                    <img
                        src={deleteSvg}
                        alt="Delete note"
                        onClick={this.delete.bind(this)}
                    />
                </header>
                <p className="note-card_text">{this.props.text}</p>
            </section>
        );
    }
}

export default NoteCard;