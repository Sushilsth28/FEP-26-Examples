
const d = new Date();

document.getElementById('date-output').textContent = `
    Today is ${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}
`;

const presentationDay = new Date(2026, 11, 16, 9, 15);
console.log(presentationDay);
console.log(presentationDay.toISOString());

function updateClock() {
    const d = new Date();

    const h = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    const sec = String(d.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `
        ${h}:${min}:${sec}
    `;
}

updateClock();
setInterval(updateClock, 1000);





