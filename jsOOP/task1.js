import { Book } from "./Book.js";
import { EBook } from "./EBook.js";


const book1 = new Book("The Shining","Stephen King",1980);
console.log("The first book:");
book1.printInfo();
book1.year = 1979;
console.log("The first book after updates:");
book1.printInfo();
console.log("=====================");

const book2 = new Book("Harry Potter and the Philosopher's stone", "J.K.Rolling", 1997);
console.log("The second book:");
book2.printInfo();
book2.author = "J.K.Rowling";
console.log("Changed author is ",book2.author);
console.log("=====================");


const book3 = new Book("Mindhunter", "John Douglas", 1998);
console.log("The third book:");
book3.printInfo();
book3.title = 0; // title should not be changed
console.log("The second book after updates:");
book3.printInfo(); 
console.log("=====================");

const eBook1 = new EBook("Leviaphan", "Shiro Kuroj", 2020, "epub");
console.log("The first ebook:");
eBook1.printInfo();
eBook1.author = "Shiro Kuroi"; // changing title through Book setter
eBook1.fileFormat = "T"; // format should not be changed
console.log("Unchanged file format is ",eBook1.fileFormat);
eBook1.fileFormat = "TXT";
console.log("The first ebook after updates:");
eBook1.printInfo();
console.log("=====================");

console.log("Oldest book from above: ");
Book.getOldestBook(eBook1,book2,book1,book3).printInfo();
console.log("=====================");

const eBook2 = EBook.convertToEBook(book3,"pdf");
console.log("Converted to ebook third book:");
eBook2.printInfo();
console.log("=====================");