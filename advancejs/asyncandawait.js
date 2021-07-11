// function loaddata() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => {
//             displayData(data);
//         })
// }
const ul = document.getElementById('mylist')

function displayData(data) {
    const li = document.createElement('li')
        // li.innerHTML = `<h2>${data.username}</h2>`
        // ul.append(li)

    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('div')
        li.innerHTML = `
            <h2 class="username">${data[i].name}</h2>
            <p class="phone">${data[i].email}</p>
            <p class="address">Address: ${data[i].address.street} <br> Suite: ${data[i].address.suite} <br> ${data[i].address.city} <br> ${data[i].address.zipcode}</p>
            <button  onclick="delete_details(event)">Delete</button>
        `
        ul.appendChild(li)
    }
}


function delete_details(event) {
    // console.log(event.target.parentElement)
    event.target.parentElement.parentElement.removeChild(event.target.parentElement)
}

// loaddata()

// async function hello(name) {
//     return 'Hello ' + name;
// }
// const greeting = hello("Shahed")
// console.log(greeting)
// greeting.then(res => console.log(res))


async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    return data;
}
loadData().then(data => {
    displayData(data);
})