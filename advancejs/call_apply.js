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

// console.log(normalperson.getFullName())
normalperson.chagebill(100)
console.log(normalperson.salary)
console.log(normalperson.getFullName.call(normalperson))

// we can do also like this
var myouterObj = {
    name: "Md Shahed Talukder",
    age: 11,
    job: "Caller Intern",
    innerObj: {
        name: "Md Arefin Akash",
        value: function() {
            console.log("My Name is: " + this.name);
        }
    }
}
myouterObj.innerObj.value()
myouterObj.innerObj.value.call(myouterObj)
    // this is the simple example of call method
    // we will do the same thing again but this time we will use call method inside innerObj
var myouterObj = {
    name: "Md Shahed Talukder",
    age: 11,
    job: "Caller Intern",
    innerObj: {
        name: "Md Arefin Akash",
        value: function() {
            console.log("My Name is: " + this.name);
        }.call(myouterObj)
    }
}
myouterObj.innerObj.value;
// here you can see the value is not treating like a function
// now let's use call method for two different objects
var shahed = {
    name: "Md Shahed Talukder",
    date_of_birth: 1997,
    age: function(currentyear) {
        console.log(this.name + "'s age is: " + (currentyear - this.date_of_birth));
    }
}

var azad = {
    name: "Azad Mia",
    date_of_birth: 1996
}

shahed.age(2020)
shahed.age.call(azad, 2020)