const todoList=[];
let todoListHTML=' ';
function eventList(){
  for(i=0;i<todoList.length;i++){
    let todo=todoList[i];
    let html=`<p>${todo}</p>`;
    todoListHTML+=html;
}
console.log(todoListHTML) ;
document.querySelector('.js-text').innerHTML=todoListHTML;
}  
function addWork(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  inputElement.value='';
  // console.log(todoList);  
}
