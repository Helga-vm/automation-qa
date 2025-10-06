import { Book } from "./Book.js";

export class EBook extends Book {
    _fileFormat;

    constructor(title,author,year,fileFormat){
        super(title,author,year);
        this._fileFormat = fileFormat;
    }

    printInfo(){
        console.log(`"${this.title}" by ${this.author}, published in ${this.year} in ${this.fileFormat} format`);
    }

    get fileFormat(){
        return this._fileFormat;
    }

    set fileFormat(newFileFormat){
        if (typeof newFileFormat !== 'string' || newFileFormat.length<2){
            return;
        }
        this._fileFormat = newFileFormat;
    }

    static convertToEBook({title,author,year},fileFormat){
        return new EBook(title,author,year,fileFormat);
    }
}