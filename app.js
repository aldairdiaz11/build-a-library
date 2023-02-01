class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
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
        if (this._ratings.length > 0) {
            return (this._ratings.reduce(
                (acc, current) => acc + current
            ) / this._ratings.length).toFixed(2);
        } else {
            return 'Ratings array is empty'
        }
    }

    addRating(element) {
        this._ratings.push(element);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._pages = pages
        this._author = author;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

// testing
const harryPotter = new Book('JK Rowling', 'Deathly Hallows', 456)
console.log(harryPotter.getAverageRating()); // 7.00
harryPotter.toggleCheckOutStatus();
console.log(harryPotter.isCheckedOut); // true

const historyOfEverything = new Book('Bill Bryson', "A Short History of Nearly Everything", 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'speed', '116');
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

console.log(historyOfEverything.pages);
console.log(historyOfEverything.ratings);
console.log(historyOfEverything.title);
console.log(historyOfEverything.author);
historyOfEverything.isCheckedOut = false


console.log(speed.director);
console.log(speed.runTime);