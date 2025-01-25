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

    if(selectedValue){
        output.textContent = `
         <p> You selected ${selectedValue} out 5 </p>
        `
    } else{
        output.textContent = `
        <p> Please select a value </p>

       `
        

    }

})
        
//         // Store the value of the selected button
//         selectedValue = button.getAttribute('data-value');
//     });
// });

// // Submit button logic
// submitButton.addEventListener('click', function() {
//     if (selectedValue) {
//         alert(`You selected button with value: ${selectedValue}`);
//     } else {
//         alert('Please select a button first!');
//     }
// });