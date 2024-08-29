const todoList=[];

eventList();
function eventList(){
  let todoListHTML=' ';
  for(i=0;i<todoList.length;i++){
    const todo=todoList[i];
    const html=`<p>${todo} <button oncli>Delete</button></p>`;
    todoListHTML+=html;
}
console.log(todoListHTML) ;
document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}  
function addWork(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  inputElement.value='';
  // console.log(todoList);  
  eventList();
}
