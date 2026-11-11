
function calculateChargeLevel() {
       
    const name = document.getElementById('name').value; 
    const level = Number(document.getElementById('charge-level').value);
    document.getElementById('name-output').textContent = `Hello ${name}, Your charge level is ${level/5 * 100}%!`;

    
   

}
  