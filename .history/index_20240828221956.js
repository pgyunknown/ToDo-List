const todoList=[];
let toDoList='';
function eventList(){
  for(i=0;i<todoList.length;i++){
    const todo=todoList[i];
    const html=`<p>${todo}</p>`;
    toDoList+=html;
}
console.log(toDoList) 

document.querySelector('.div-text').innerHTML=toDoList;
}  
function addWork(){
  const inputElement=document.querySelector('.js-work-Input');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  inputElement.value='';
  console.log(todoList);  
}
