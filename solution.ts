

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



function getLength(value: string | any[]): number {


    if (typeof value === "string") {
        return value.length;
    }

    else {

        return value.length;
    }
}




class Person {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `'Name : ${this.name}, Age:${this.age}'`
    }
}











interface IBooks {
    title: String;
    rating: number;
}



function filterByRating(value: IBooks[]): IBooks[] {
    let result = value.filter(item => item.rating >= 4);
    return result;
}





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
        const baseTotal = product.price * product.quantity;

        let finalPrice = baseTotal;

        if (product.discount && product.discount > 0) {
            const discountFactor = 1 - (product.discount / 100)
            finalPrice = baseTotal * discountFactor
        }


        return total + finalPrice;
    }, 0)

}





