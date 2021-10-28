// ======= Variables/ DOM =======

const error = document.getElementById('error')
const input = document.querySelector('.input-tec')
const lista = document.getElementById('list')
const techs = []
//const all = document.querySelector('.content-tech')


// ======= Functions =======

// Button new tech
function newTech() {    
    if (input.value != '' && notInTechs()) { 
        lista.innerHTML += `<li class="card"
                                draggable="true" 
                                ondragstart="onDragStart(event)" 
                                ondrag="onDrag(event)" 
                                ondragend="onDragEnd(event)" 
                                onclick="checkItem(this)"
                            >
                                <p id="delete-item">${input.value}</p>
                                <span onclick="removeItem(input.value)">
                                    <img id="img"
                                         src="../../public/assets/remove.svg" 
                                         alt="deletar um item"
                                    >
                                </span>
                            </li>`
        techs.push(input.value.toLowerCase());
        input.value = ""
        input.focus() 
        error.innerHTML = ""
        //all.add()
    } else {
        error.innerHTML = "Por favor, digite uma nova tecnologia."  
    } 
}

// Input verify
function notInTechs() {
    if (techs.indexOf(input.value.toLowerCase()) == -1) {
        return true
    } else {
        return false
    }
}

// Check items
function checkItem(item) {
    item.classList.toggle('check')
}

// Remove items
function removeItem(inp) {
    let del = document.getElementById('delete-item')
    let idx = techs.indexOf(inp.toLowerCase())
    if (idx != -1) {
        techs.splice(idx, 1)
    }
    del.parentNode.remove()
}    

// Button check all
function checkAll(){
    lista.classList.toggle('check')
}

// Button remove all
function removeAll(){
    lista.innerHTML = ''
}


// ======= Drag Events =======

// .card 
function onDragStart(e) {
    e.dataTransfer.setData("Text", e.target.id)
    e.target.style.background = "rgba(128, 0, 128, 0.5)"  
}

function onDrag(e) {
    e.target.style.cursor="move"
}

function onDragEnd(e){
    e.target.style.background = ""
}

// #task-content
function onDragEnter(e) {
    
}

function onDrop(e){
    var data = e.dataTransfer.getData("Text")
    document.getElementById('task-content').appendChild(document.getElementById(data))
    e.preventDefault(); 
}

function onDragOver(e) {
    e.preventDefault();    
}

function onDragLeave(e){

}

