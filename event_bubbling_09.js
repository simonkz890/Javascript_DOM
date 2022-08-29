//Event bubbling 

 //bubbling an event basically is bublling through its parent in DOM


 //Task list
 document.querySelector('.card-title').addEventListener('click',function(){
    console.log('Task list clicked....')
});

//card-content
document.querySelector('.card-content').addEventListener('click',function(){
    console.log('card content clicked....')
});

//card
document.querySelector('.card').addEventListener('click',function(){
    console.log('Card clicked....')
});

//col
document.querySelector('.col').addEventListener('click',function(){
    console.log('col clicked....')
});

//row
document.querySelector('.row').addEventListener('click',function(){
    console.log('row clicked....')
});

//container
document.querySelector('.container').addEventListener('click',function(){
    console.log('container clicked....')
});

//event deligation 
// we put the event listerner on the parent element and it goes down to the child 

const delItem = document.querySelector('.delete-item');

document.body.addEventListener('click',deleteItem);

function deleteItem(e){

    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('Delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}