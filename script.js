const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');


function addTask(){

    if(inputbox.value === ''){
        alert('Please enter a task')

}else{
    let li = document.createElement('li');
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7" ;
    li.appendChild(span);
  
}

inputbox.value = '';
 saveData();

}

listcontainer.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
 saveData();
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData();

    }
}, false) ;

function saveData(){
    localStorage.setItem('tasks', listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem('tasks');

}
showTask();

inputbox.addEventListener("keyup", function(e) {
    e.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (e.key === 'Enter') {
  addTask();

}
});