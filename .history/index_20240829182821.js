const todoList=[];
let toDoList=' ';
function eventList(){
  for(i=0;i<todoList.length;i++){
    let todo=todoList[i];
    let jshtml=`<p>${todo}</p>`;
    toDoList+=jshtml;
}
console.log(toDoList) ;
console.log(document.querySelector('.js-text').innerHTML=toDoList);
}  
function addWork(){
  const inputElement=document.querySelector('.js-anmenput');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  inputElement.value='';
  // console.log(todoList);  
}
