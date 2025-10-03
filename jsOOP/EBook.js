import { Book } from "./Book.js";

export class EBook extends Book {
    fileFormat;

    constructor(title,author,year,fileFormat){
        super(title,author,year);
        this.fileFormat = fileFormat;
    }

    printInfo(){
        console.log(`This is "${this.title}" by ${this.author}, published in ${this.year} in ${this.fileFormat} format`);
    }

    get getFileFormat(){
        return this.fileFormat;
    }

    set setFileFormat(fileFormat){
        if (typeof fileFormat !== 'string' || fileFormat.length<2){
            return;
        }
        this.fileFormat = fileFormat;
    }

    static convertToEBook({title,author,year},fileFormat){
        return new EBook(title,author,year,fileFormat);
    }
}