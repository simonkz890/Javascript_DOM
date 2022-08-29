// replace the element 

 //Create element
 const newHeading = document.createElement('h2');

 //Add id 
 newHeading.id = 'task-title';

 //New text node
 newHeading.appendChild(document.createTextNode('Task list'));

 //Get the old heading 
 const oldHeading = document.getElementById('task-title');

 //parent Element 
 const cardAction = document.querySelector('.card-action');

 //Replace method
 cardAction.replaceChild(newHeading,oldHeading);

 //How to remove the element 
 const lis = document.querySelectorAll('li');
 const list = document.querySelector('ul');

 //remove the list item
 lis[0].remove();

 //remove as child element
 list.removeChild(lis[2]); 