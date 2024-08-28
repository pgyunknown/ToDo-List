const todoList=[];

function eventList({

}

function addWork(){
  const inputElement=document.querySelector('.js-work-Input');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  inputElement.value='';
  console.log(todoList);  
}

