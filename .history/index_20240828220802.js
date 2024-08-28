const todoList=[];

function eventList(){
  for(i=0;1)
}

function addWork(){
  const inputElement=document.querySelector('.js-work-Input');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  inputElement.value='';
  console.log(todoList);  
}

