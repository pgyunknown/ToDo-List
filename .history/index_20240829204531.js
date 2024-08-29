const todoList=[{
  name:'',duedate:''
}
];

eventList();
function eventList(){
  let todoListHTML=' ';
  for(i=0;i<todoList.length;i++){
    const todoObj=todoList[i];
    const {name}=todoObj;
    const {duedate}=todoObj;
    const html=`
    <div >${name}</div>
    <div >${duedate}</div>
    
    `;
    todoListHTML+=html;
}
console.log(todoListHTML) ;
document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}  
function addWork(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;

  const dateinputElement=document.querySelector('.js-date-b');
  const duedate=dateinputElement.value;

  todoList.push({
    name:name,
    duedate:duedate
  });

  inputElement.value='';
  // console.log(todoList);  
  eventList();
}

