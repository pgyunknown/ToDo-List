const todoList=[];

function addWork(){
  const inputElement=document.querySelector('.js-work-Input');
  const name=inputElement.value;

  todoList.push(name);
  console.log(name);

  in.value='';
}

