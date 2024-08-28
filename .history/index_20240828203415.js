const todoList=[];

function addWork(){
  const inputEle=document.querySelector('.js-work-input');
  const nameWork=inputWork.value;

  todoList.push(nameWork);
  console.log(nameWork);

  inputWork.value='';
}

