export default class NotesArray {
    constructor() {
        this.notes = [];
        this._subscription = [];
    }

    register(func) {
        this._subscription.push(func);
    }

    unregister(func) {
        this._subscription = this._subscription.filter(f => f != func);
    }

    notify() {
        this._subscription.forEach(func => {
            func(this.notes);
        });
    }

    createNote(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.notify();
    }

    deleteNote(cardIndex) {
        this.notes.splice(cardIndex, 1);
        this.notify();
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}