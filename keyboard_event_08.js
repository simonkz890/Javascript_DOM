const form = document.querySelector('form');
 const taskInput = document.getElementById('task');
 const heading = document.querySelector('h5');


 // form.addEventListener('submit',runEvent);

 //keydown
 // taskInput.addEventListener('keydown',runEvent);

 //keypress
 // taskInput.addEventListener('keypress',runEvent);

 //focus
 // taskInput.addEventListener('focus',runEvent);

 //blur
 // taskInput.addEventListener('blur',runEvent);

 //cut
 taskInput.addEventListener('cut',runEvent);



 //Event handler
 function runEvent(e){
     console.log(`Event Type: ${e.type}`);

     // e.preventDefault();
 } 