const todoList=[];

function addWork(){
  const inputE=document.querySelector('.js-work-input');
  const nameWork=inputWork.value;

  todoList.push(nameWork);
  console.log(nameWork);

  inputWork.value='';
}

