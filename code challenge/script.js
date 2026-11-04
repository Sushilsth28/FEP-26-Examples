
function calculateChargeLevel() {
    const name = document.getElementById('name').value;
    // convert numeric input to number:
    const level = Number(document.getElementById('charge-level').value);
    document.getElementById('name-output').textContent = `${name}, your charge level is ${level * 20}%!`;

    const output = document.getElementById('name-output');

    }

  