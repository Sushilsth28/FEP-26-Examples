const COLORS = {
    red: "rgb(255, 47, 0)",
    yellow: "#ffb700",
    green: "lime"
};

function resetColors() {
    for (const elem of document.querySelectorAll(`#container > div`)) {
        elem.style.backgroundColor = 'black';
    }
}
resetColors();

function activateLight(lightNumber) {
    const light = document.querySelector(`#container > div:nth-child(${lightNumber})`);
    const color = light.dataset.color;

    resetColors();
    light.style.backgroundColor = COLORS[color] || 'gray';
}

/*setInterval(() => {
    const lightNumber = Math.ceil(Math.random() * 3);
    activateLight(lightNumber);
}, 1000);*/

function nextLight(delay) {
    if (delay < 100) delay = 100;
    console.log(delay);

    const lightNumber = Math.ceil(Math.random() * 3);
    activateLight(lightNumber);

    setTimeout(() => nextLight(delay-50), delay);
}
nextLight(1000);

console.log("hello");
