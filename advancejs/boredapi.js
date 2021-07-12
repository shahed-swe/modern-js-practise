async function loadactivity() {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();
    return data;
}

// loadactivity().then(data => {
//     showData(data);
//     console.log(data);
// })

setInterval(() => {
    loadactivity().then(data => {
        showData(data);
    })
}, 1000);


function showData(data) {
    const elem = document.getElementById("activity");
    const type = document.getElementById("type");
    elem.innerHTML = data.activity;
    type.innerHTML = data.type;
}