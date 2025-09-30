const car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2005
};
const car2 = {
    brand: "Honda",
    model: "C-RV",
    owner: "Malcolm P."
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);