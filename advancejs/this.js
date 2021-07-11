const myObj = {
        name: 'Shahed Talukder',
        getFullName: function() {
            console.log(this);
            return 'Mr ' + this.name;
        }
    }
    // myObj.getFullName()
const anotherObj = {
    name: "Akkas Ali",
}

// myObj.getFullName.call(anotherObj)
anotherObj.getFullName = myObj.getFullName;
console.log(anotherObj.getFullName)
myObj.getFullName();
anotherObj.getFullName();


function add(a, b) {
    console.log(this);
    return a + b;
}

add(12, 13)
anotherObj.sum = add;
const sum = anotherObj.sum(12, 34);
console.log(sum)