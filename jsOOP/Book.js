export class Book {
    title;
    author;
    year;

    constructor(title,author,year){
        this.author = author;
        this.title = title;
        this.year = year;
    }

    printInfo(){
        console.log(`This is "${this.title}" by ${this.author}, published in ${this.year}`);
    }

    get getTitle(){
        return this.title;
    }

    get getAuthor(){
        return this.author;
    }

    get getYear(){
        return this.year;
    }

    set setTitle(title){
        if (typeof title !== 'string' || title.length<1){
            return;
        }
        this.title = title;
    }

    set setAuthor(author){
        if (typeof author !== 'string' || author.length<1){
            return;
        }
        this.author = author;
    }

    set setYear(year){
        if (typeof year !== 'number' || year.length>2025){
            return;
        }
        this.year = year;        
    }

    static getOldestBook(...books){
        if (books.length===1){
            return books[0];
        }
        books.sort((book1,book2)=>book1.getYear - book2.getYear);
        return books[0];
    }

}