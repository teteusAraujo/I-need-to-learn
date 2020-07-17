const input = document.querySelector('.input-tec')
const buttonAdd = document.querySelector('.add')
const lista = document.getElementById('task-content')
const error = document.getElementById('error')
const all = document.querySelector('.content-tec')



buttonAdd.addEventListener('click', function(){
         
        if (input.value != "") { 
            lista.innerHTML += `<li id="card" class="cards" draggable="true" ondragstart="onDragStart(event)" ondrag="onDrag(event)" ondragend="onDragEnd(event)" onclick="checkItem(this)"> <p>${input.value}</p>
              <span id="delete-item" onclick="removeItem(this)"> <img id="img" src="../assets/remove.svg" alt="deletar um item"></span>
              </li>  `

            input.value = "" 
            error.innerHTML =""
            all.add()

        } else {
            error.innerHTML = "Por favor, digite uma nova tecnologia ."
            
        }
        
})



function checkItem(item) {
    item.classList.toggle('check')
}


function removeItem(item) {
    item.parentNode.remove()
}



function checkAll(){
    lista.classList.toggle('check')
}


function removeAll(){
    lista.remove()
}


function onDragStart(e){
  
    e.dataTransfer.setData("Text",e.target.id);
    
    event.target.style.background = "rgba(128, 0, 128, 0.5)";
    
        
}
function onDrag(e){
    console.log('card movendo')
    event.target.style.cursor="move"
}

function onDragEnter(e){
    
    
}

function onDragOver(e){
  
    e.preventDefault();
        
}

function onDragLeave(e){
  
}

function onDrop(e){

    var data = e.dataTransfer.getData("Text");
    
    document.getElementById('task-content').appendChild(document.getElementById(data));
   
    
    e.preventDefault(); 
}

function onDragEnd(e){
    
    event.target.style.background = "";
    
    
}
