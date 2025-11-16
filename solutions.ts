// problem1

function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {

        return value.toUpperCase();
    }



    else if (typeof value === "number") {
        return value * 10
    }

    else {


        return !value;
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));


// problem2

function getLength(value: string | any[]): number {


    if (typeof value === "string") {
        return value.length;
    }

    else {

        return value.length;
    }
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

// problem3

class Person {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name : ${this.name}, Age:${this.age}`
    }
}

const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


// problem4


interface IBooks {
    title: String;
    rating: number;
}

function filterByRating(value: IBooks[]): IBooks[] {
    let result = value.filter(item => item.rating >= 4);
    return result;
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));



// problem 5


interface IUsers {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

function filterActiveUsers(users: IUsers[]): IUsers[] {
    let user = users.filter(user => user.isActive);
    return user;
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));






















