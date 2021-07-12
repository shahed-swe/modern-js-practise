async function whoami() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data
}

whoami().then(data => {
    // console.log(data.results[0].name.first)
    displayUser(data);
    console.log(data.results)
})

function displayUser(data) {
    const name = document.getElementById('name');
    const info = document.getElementById('information');
    name.innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    info.innerHTML = `
    <img src="${data.results[0].picture.large}">
    <div>Age: ${data.results[0].dob.age} <div>Date: ${data.results[0].dob.date}</div></div>
    <div>Phone: ${data.results[0].phone}</div>
    <div>Email: ${data.results[0].email}</div>
    <div>Gender: ${data.results[0].gender}</div>

    `;
}