const normalperson = {
    firstname: "shahed",
    lastname: "khoshnad",
    salary: 1200,
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    },
    chagebill: function(amount) {
        this.salary = this.salary + amount;
        return this.salary
    }
}


const friendlyPerson = {
    firstName: 'John',
    lastName: 'Doe',
    salary: 2500,
}

const billing = normalperson.chagebill.bind(friendlyPerson)
console.log(billing(2000))

normalperson.chagebill.call(friendlyPerson, 1000, 20, 60)
console.log(friendlyPerson.salary)

normalperson.chagebill.apply(friendlyPerson, [1000, 56, 787])
console.log(friendlyPerson.salary)