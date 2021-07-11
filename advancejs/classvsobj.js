class Person {
    constructor(first_name, last_name, salary) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.salary = salary;
    }
    get_detail() {
        return this.first_name + " " + this.last_name + " " + this.salary;
    }
    get_salary(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

class Employee extends Person {
    constructor(first_name, last_name, salary, title) {
        super(first_name, last_name, salary);
        this.title = title;
    }
    get_detail() {
        return super.get_detail() + " " + this.title;
    }

}

const p1 = new Person('John', 'Smith', 100000);
const p2 = new Employee('Jane', 'Doe', 100000, 'HR Manager');

console.log(p1.first_name);
console.log(p2.first_name);
console.log(p2.last_name);
console.log(p2.salary);
console.log(p2.title);
console.log(p2.get_detail());

p1.get_salary.apply(p2, [500, 60, 20]) //seding object of p2 object with p1

console.log(p1.salary);
console.log(p2)
console.log(p2.salary)


// let's make an object from function
function make_person(first_name, last_name, salary) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.salary = salary;
}

const oldper = new make_person('Shahed', 'Temp', 90000)
p1.get_salary.apply(oldper, [500, ])
console.log(oldper)