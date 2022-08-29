//we can create DOM elements from scrach with js

 //create element
 const li = document.createElement('li');

 //Add class
 li.className = 'collection-item';

 //Add id 
 li.id = 'new-item';

 //Create a text node and append it 
 li.appendChild(document.createTextNode('new Item'));

 //Create a link 
 const link = document.createElement('a');

 //add class to link
 link.className = 'delete-item secondary-content';

 //Add html icon 
 link.innerHTML='<i class="fa fa-remove"></i>';

 //append link as child of li
 li.appendChild(link);

 //Append li as child of ul
 document.querySelector('ul.collection').appendChild(li);