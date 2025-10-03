import { Book } from "./Book.js";
import { EBook } from "./EBook.js";


const book1 = new Book("The Shining","Stephen King",1980);
book1.printInfo();
book1.setYear = 1979;
book1.printInfo();

const book2 = new Book("Harry Potter and the Philosopher's stone", "J.K.Rolling", 1997);
book2.printInfo();
book2.setAuthor = "J.K.Rowling";
console.log("Changed author is ",book2.getAuthor);


const book3 = new Book("Mindhunter", "John Douglas", 1998);
book3.printInfo();
book3.setTitle = 0; // title should not be changed
book3.printInfo(); 

const eBook1 = new EBook("Leviaphan", "Shiro Kuroj", 2020, "epub");
eBook1.printInfo();
eBook1.setAuthor = "Shiro Kuroi"; // changing title through Book setter
eBook1.setFileFormat = "T"; // format should not be changed
console.log("Unchanged file format is ",eBook1.getFileFormat);
eBook1.setFileFormat = "TXT";
eBook1.printInfo();

console.log("Oldest book from above: ",Book.getOldestBook(eBook1,book2,book1,book3));

const eBook2 = EBook.convertToEBook(book3,"pdf");
eBook2.printInfo();