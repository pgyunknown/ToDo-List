const todoList=[];

function addWork(){
  const inputEle=document.querySelector('.js-work-input');
  const nameWork=inputEle.value;

  todoList.push(nameWork);
  console.log(nameWork);

  inputWork.value='';
}

