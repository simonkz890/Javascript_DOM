const clear = document.querySelector('.clear-tasks');
 const card = document.querySelector('.card');
 const heading = document.querySelector('h5');

 //click
 // clear.addEventListener('click',runEvent);

 //Double click
 // clear.addEventListener('dblclick',runEvent);

 //Mousedown
 // clear.addEventListener('mousedown',runEvent);

 // Mouseup
 // clear.addEventListener('mouseup',runEvent);

 //mouse enter and mouse leave fires off when (enter and leave the element)

 //Mouseenter
 // card.addEventListener('mouseenter',runEvent);

 //mouseleave
 // card.addEventListener('mouseleave',runEvent);

 //Mouse over and out fires off on nested element

 //mouseover
 // card.addEventListener('mouseover',runEvent);

 //mouseout
 // card.addEventListener('mouseout',runEvent);

 //Mousemove
 card.addEventListener('mousemove',runEvent);

 //Event handler
 function runEvent(e){
     console.log(`Event type : ${e.type}`);
       heading.textContent = `MouseX:${e.offsetX} MouseY:${e.offsetY}`;

       document.body.style.background=`rgb(${e.offsetX},${e.offsetY},40)`;

 } 