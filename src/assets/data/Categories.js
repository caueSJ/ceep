export default class Categories {
    constructor() {
        this.categories = [];
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
            func(this.categories);
        });
    }

    addCategory(newCategory) {
        this.categories.push(newCategory);
        this.notify();
    }
}