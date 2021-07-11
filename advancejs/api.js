// JSON - Javascript object notation

const user = { id: 1, name: 'John', age: 30 };

const userJson = JSON.stringify(user)

console.log(userJson);

const userfromJSon = JSON.parse(userJson)
console.log(userfromJSon)

// fetching json placeholders