var nameVar = 'Matt';
nameVar = 'Tom';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Hal';
    return petName;
}
const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = "Jen Woo";
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);