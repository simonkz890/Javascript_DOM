// document.getElementsByClassName()
 // const items = document.getElementsByClassName('collection-item');

 // console.log(items);
 // console.log(items[1]);
 // items[1].style.color='red';
 // items[3].textContent='Hello';

 // document.getElementsByTagName()
 // let lis = document.getElementsByTagName('li');

 // console.log(lis);
 // console.log(lis[1]);
 // lis[2].style.color='pink';
 // lis[1].textContent='Welcome';

 //How to convert html collection to an array

 // const lis_array = Array.from(lis);
 // console.log(typeof lis_array);
 // let val = lis_array.reverse();

 // document.querySelectorAll()
 // return nodelist
 // nodelist can be treated like an array (loops and methods)
 //converting it to an array is not required

 const items = document.querySelectorAll('ul.collection li.collection-item');

 items.forEach(function(item){
     item.textContent='hello';
 });

 const liOdd = document.querySelectorAll('li:nth-child(odd)');
 const liEven = document.querySelectorAll('li:nth-child(even)');

 liOdd.forEach(function(li){
     li.style.background='#ccc';
 });

 for (let i = 0 ; i <liEven.length ;  i++){
     liEven[i].style.background='#f4f4f4';
 }


 console.log(items);