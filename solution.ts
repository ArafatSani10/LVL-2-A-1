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

// test:

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


// testing:
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


// problem 6

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book) {


    let availableStatus: string;

    if (book.isAvailable === true) {
        availableStatus = "Yes"
    }

    else {
        availableStatus = "No"
    }


    console.log(`Title : ${book.title}, Author:${book.author}, Published:${book.publishedYear}, Available:${availableStatus}`);
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);



// problem -8


interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}


function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }


    return products.reduce((total, product) => {
        const totalItem = product.price * product.quantity;

        return total + totalItem
    }, 0)

}


const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));





// problem -07

type ArrayType = (number | string)[];

function getUniqueValues(arr1: ArrayType, arr2: ArrayType) {
    const result: ArrayType = [];

    function existsInArray(array: ArrayType, value: number | string): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!existsInArray(result, arr1[i])) {
            result[result.length] = arr1[i];
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!existsInArray(result, arr2[i])) {
            result[result.length] = arr2[i];
        }
    }

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));




















