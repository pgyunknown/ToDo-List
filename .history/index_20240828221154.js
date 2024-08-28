const todoList=[];
 
let todoList='';
function eventList(){
  for(i=0;i<todoList.length;i++){
    const todo=todoList[i];
    const html=`<p>${todo}</p>`;
    todoList+=html;
}
console.log(todoList).innerH

document.querySelector('.div-text')

function addWork(){
  const inputElement=document.querySelector('.js-work-Input');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  inputElement.value='';
  console.log(todoList);  
}

