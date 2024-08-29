const todoList=[{
  name:'',duedate:''
};
];

eventList();
function eventList(){
  let todoListHTML=' ';
  for(i=0;i<todoList.length;i++){
    const todoObj=todoList[i];
    const {name}=todoObj;
    const {duedate}=todoObj;
    const html=`
    <p>
    ${name} ${duedate}
    <button onclick="todoList.splice(${i},1);
    eventList();">Delete</button>
    </p>`;
    todoListHTML+=html;
}
console.log(todoListHTML) ;
document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}  
function addWork(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;

  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;

  todoList.push(name);

  inputElement.value='';
  // console.log(todoList);  
  eventList();
}
