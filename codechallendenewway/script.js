
function calculateChargeLevel() {
       
    const name = document.getElementById('name').value; 
    const level = Number(document.getElementById('charge-level').value);
    document.getElementById('name-output').textContent = `${name}, your charge level is ${level * 20}%!`;
    
    
   

}
  