const person = {
    firstName: "Patrik",
    lastName: "Star",
    age: 23
};

person.email = "patrik.star@email.com";
delete person.age;

console.log(person);