// script.js

// Variables
let selectedValue = null;

// Select all tag buttons
const Allbuttons = document.querySelectorAll('.tag');
const submitButton = document.getElementById('submitBtn');

// Add event listeners to the buttons

Allbuttons.forEach(button =>{

    button.addEventListener('click', function(){

       Allbuttons.forEach(b =>b.classList.remove('selected') )
       button.classList.add('selected')
       selectedValue = button.getAttribute('data-value')
       
    })
})
submitButton.addEventListener('click', ()=>{

    selectedValue ?  output.textContent = `
    <p> You selected ${selectedValue} out 5 </p>
   `
   :  output.textContent = `
   <p> Please select a value </p> `
})
