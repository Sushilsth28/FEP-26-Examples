
let userName = localStorage.getItem('userName');

if (!userName) {
    userName = prompt("What is your name?");
    localStorage.setItem('userName', userName);
}

document.getElementById('user-name').textContent = `
    Hello ${userName}!
`;

document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('visitCount');
    location.reload();
});

// localStorage and numbers
let visitCount = localStorage.getItem('visitCount') || 1;
document.getElementById('visit-count').textContent = `You have visited this page ${visitCount} times.`;
localStorage.setItem('visitCount', Number(visitCount) + 1);


//synchronous
function two() {
    for (let index = 0; index < 10000; index++) {
        console.log("...");
    }
    console.log("Two");
}

console.log("One");
two();
console.log("Three");

// Asynchronous
console.log(1);
setTimeout(() => console.log(2), 1);
console.log(3);


async function getJoke() {
    const resp = await fetch("https://icanhazdadjoke.com", {
        headers: { "Accept": "text/plain"}
    });
    const jokeText = await resp.text();

    console.log(jokeText);
    document.getElementById('joke').textContent = jokeText;
}
getJoke();