const todoList=[];
let toDoList=' ';
function eventList(){
  for(i=0;i<todoList.length;i++){
    let todo=todoList[i];
    let jshtml=`<p>${todo}</p>`;
    toDoList+=jshtml;
}
console.log(toDoList) ;
let newName =document.querySelector('.js-text');
newName.innerHTML=toDoList;
console.log(newName)
}  
function addWork(){
  const inputElement=document.querySelector('.js-work-Input');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  inputElement.value='';
  // console.log(todoList);  
}
