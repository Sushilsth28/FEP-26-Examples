/*
document.getElementById('light-1').style.backgroundColor = 'red';
document.querySelector('#light-2').style.backgroundColor = 'yellow';
document.querySelector('#container > div:nth-child(3)').style.backgroundColor = 'green';
*/

const colors = [ "red", "yellow", "green"];
document.querySelectorAll('.lights').forEach((elem, i) => {
    console.log(i, elem);
    elem.style.backgroundColor = colors[i];
});