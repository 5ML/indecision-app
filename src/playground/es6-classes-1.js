class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
      super(name, age);  
      this.major = major;  
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }

}

const me = new Student('Matt Woo', 25, 'Electrical Engineering');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const me2 = new Traveler('Matt Woo', 27, 'Poznan');
console.log(me2.getGreeting());

const other2 = new Traveler();
console.log(other2.getGreeting());