class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(isIt) {
        if (typeof isIt === 'boolean')
            this._isCheckedOut = isIt;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        return (this._ratings.reduce(
            (acc, current) => acc + current
        ) / this._ratings.length).toFixed(2);
    }

    addRating(element) {
        this._ratings.push(element);
    }
}

class Book extends Media {
    constructor(author, title, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this._author = author;
    }
    get author() {
        return this._author;
    }
}

// testing
const harryPotter = new Book('JK Rowling', 'Deathly Hallows', 'true', [6, 7, 8])
console.log(harryPotter.getAverageRating()); // 7.00
harryPotter.toggleCheckOutStatus();
console.log(harryPotter.isCheckedOut) // false
