/*
document.getElementById('light-1').style.backgroundColor = 'red';
document.querySelector('#light-2').style.backgroundColor = 'yellow';
document.querySelector('#container > div:nth-child(3)').style.backgroundColor = 'green';
*/

function resetColors(container) {
    for (const elem of document.querySelectorAll(`#${container} > div`)) {
        elem.style.backgroundColor = 'black';
    }
}
resetColors('container');
resetColors('container-2');

const colors = [ "red", "yellow", "green"];
document.querySelectorAll('.lights').forEach((elem, i) => {
    console.log(i, elem);
    //elem.style.backgroundColor = colors[i];
    elem.addEventListener('click', () => {
        resetColors('container');
        elem.style.backgroundColor = colors[i];
    });
});

document.querySelector('#container-2').addEventListener('click', evt => {
    const elem = evt.target;

    if (elem.parentElement.id !== 'container-2') return;

    //console.log(elem);
    resetColors('container-2');
    elem.style.backgroundColor = elem.dataset.color;

});