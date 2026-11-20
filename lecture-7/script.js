const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const d = new Date();

document.getElementById('date-output').textContent = `
    ${MONTHS[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}
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

/**
 * Form
 */
document.querySelectorAll('input, select, textarea').forEach(inp => {
    inp.addEventListener('input', () => {

        let output = inp.value;

        if (inp.getAttribute('type') === 'checkbox' && !inp.checked) {
            output = '';
        }

        document.getElementById('form-output').innerHTML = `${output}<br>`
    });
});




