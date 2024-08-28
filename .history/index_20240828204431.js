const todoList=[];

function addWork(){
  let inputEle=document.querySelector('.js-work-input');
  let nameWork=inputEle.value;

  todoList.push(nameWork);
  console.log(nameWork);

  inputWork.value='';
}

