// argument objects

const add = (a, b) => {
//
    return a + b;
};

console.log(add(55, 1, 1000));

// this keyword - no longer bound

const user = {
    name: 'Matt',
    cities: ['Poznań', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [2, 5, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());