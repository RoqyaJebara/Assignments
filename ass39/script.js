//ecma script 6 yes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
    }
}
const p1 = new Person('hussam', 30);

class Employee extends Person {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    work() {
        console.log(this.job);
    }
}
const emp2= new Employee('hussam', 30, 'development');
emp2.name = 'ali';
console.log(emp2);

///////////////////////////////////////////
//encapsulation private settter and getter attributees
class BankAccount {
    #balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
  
}
const account = new BankAccount('Ali', 10000);
account.deposit(1000);
console.log(account.getBalance());
//backend ways

