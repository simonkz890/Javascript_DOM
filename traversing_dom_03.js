//traversing means move around(select )parent and children

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

//Get child node
//it provides us a node list of all child nodes
//texts are line breaks
//In most cases we need element child nodes

val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;

// Types of nodes

//1 - element
//2 - attribute
//3 - textnode
//8 - comment
//9 - document itself
//10 - Doctype

//How to get the children element nodes
//it returns html collection
//(html collection need to convert to an array )

val = list.children;
val = list.children[0];
val = list.children[0].textContent='welcome';

//how to get access to the children of children
val = list.children[3].children[0];

//First child
val = list.firstChild;
val = list.firstElementChild;

//Last child
val = list.lastChild;
val = list.lastElementChild;

//count child
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibilings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//get prev sibiling
val = listItem.previousSibling;
val = listItem.previousElementSibling;








console.log(val); 