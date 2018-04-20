var todos = [
    {data:"Very first todo", done:false, deleted:false},
    {data:"Very second todo", done:false, deleted:false},
    {data:"Very third todo", done:false, deleted:false},
    {data:"Very fourth todo", done:false, deleted:false},
]



var activeListElem = document.getElementById("activeList");
var doneListElem = document.getElementById("doneList");
var insInfo = document.getElementById("insInfo");
insInfo.style.display = 'none';

function viewUpdate() {
    activeListElem.innerHTML = '';
    doneListElem.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].done) {
            doneListElem.innerHTML += '<li>' + todos[i].data + ' <button onclick="deleteTodo('+i+')" >X</button> </li>';
        } else {
            activeListElem.innerHTML += '<li>' + todos[i].data + ' <button onclick="deleteTodo('+i+')" >X</button> <button onclick="setTodoDone('+i+')">&#10004;</button></li>'

        }
    }
}


viewUpdate();

function createTodo (){
    var newTodoElem =document.getElementById("newTodo")
   var  newTodo =newTodoElem.value;

   if(newTodo){
        todos.unshift({data:newTodo,done:false,isTrash:false});
        viewUpdate();
        newTodoElem.value = '';
        insInfo.style.display = 'none';
   }else{
    insInfo.style.display = 'block';
   }

}

function setTodoDone (index){
    todos[index].done=true;
    viewUpdate();

}

function deleteTodo (index){
    todos.splice(index,1);
    viewUpdate();
}