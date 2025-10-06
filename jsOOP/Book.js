export class Book {
    _title;
    _author;
    _year;

    constructor(title,author,year){
        this._author = author;
        this._title = title;
        this._year = year;
    }

    printInfo(){
        console.log(`"${this._title}" by ${this._author}, published in ${this._year}`);
    }

    get title(){
        return this._title;
    }

    get author(){
        return this._author;
    }

    get year(){
        return this._year;
    }

    set title(title){
        if (typeof title !== 'string' || title.length<1){
            return;
        }
        this._title = title;
    }

    set author(author){
        if (typeof author !== 'string' || author.length<1){
            return;
        }
        this._author = author;
    }

    set year(year){
        if (typeof year !== 'number' || year>2025){
            return;
        }
        this._year = year;        
    }

    static getOldestBook(...books){
        if (books.length===1){
            return books[0];
        }
        books.sort((book1,book2)=>book1.year - book2.year);
        return books[0];
    }

}