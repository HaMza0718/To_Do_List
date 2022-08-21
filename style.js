let addButton = document.getElementById('add');
let container = document.getElementById('toDoContainer');
let input = document.getElementById('inputFeild');

addButton.addEventListener('click',function(){
   let paragraph = document.createElement('p');
   paragraph.classList.add('paragraph_style')
   paragraph.innerText = inputFeild.value;
   toDoContainer.appendChild(paragraph);
   
   /*Deletion*/
   inputFeild.value = "";
   paragraph.addEventListener('click', function(){
       paragraph.style.textDecoration = "line-through";
   })
   paragraph.addEventListener('dblclick', function(){
       toDoContainer.removeChild(paragraph);
})
})