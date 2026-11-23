
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