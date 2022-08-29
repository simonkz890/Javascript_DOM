document.querySelector('.clear-tasks').addEventListener('click',onClick);

 function onClick(e){

     // console.log('Clicked!');

     let val;
     val = e;
     //event target element
     val = e.target;
     val = e.target.id;
     val = e.target.className;
     val = e.target.classList;

     //Evet type
     val = e.type;

     //Timestamp
     val = e.timeStamp;

     //Coorde event related to window
     val = e.clientX;
     val = e.clientY;

     //Coords event related to element
     val = e.offsetY;
     val = e.offsetX;

     console.log(val);


 }