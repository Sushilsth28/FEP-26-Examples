const MIN_MINUTES = 30;
const MAX_MINUTES = 120;

document.getElementById('limits-hint').textContent =
    `Select between min ${MIN_MINUTES} to max ${MAX_MINUTES} minutes`;

function hello(minutes) {
    let output = "";
    if (Number.isNaN(minutes)) {
        output = "The Input is not a valid number!";
    } else if (minutes === 0) {
        output = "Zero? Let's get moving, even 5 minutes counts!";
    } else if (minutes < MIN_MINUTES) {
        output = "You can do better!";
    } else if (minutes <= MAX_MINUTES) {
        output = "Great job, keep it up!";
    } else if (minutes <= MAX_MINUTES) {
        output = "Very impressive, but remember to rest also!";
    }else {
        output = "You are not   a machine! Remember to rest also!";
    }

    return output;
}

function helloHandler() {
    const text = document.getElementById('number').value.trim();
    const minutes = text === "" ? NaN : Number(text);
    document.getElementById('name-output').textContent = hello(minutes);
}


