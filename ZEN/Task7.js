//Write a “person” class to hold all the details.
class Person {
    constructor(firstName, secondName, dob, age , country){
        this.firstName = firstName;
        this.secondName = secondName;
        this.dob = dob;
        this.age = age;
        this.country = country;
    }
}

const newPerson = new Person("John","Wick","30-01-1990",32,"India");
console.log(newPerson);


//write a class to calculate uber price.
class Price {
    constructor(pickUp, destination, rent, tax) {
        this.pickup = pickUp;
        this.destination = destination;
        this.rent = rent;
        this.tax = tax;
        this.total = rent + tax;
    }    
}

const totPrice = new Price("Brooklyn", "New York", 100, 20);
console.log(totPrice);