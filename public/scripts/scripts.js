// ======= Variables/ DOM =======
const error = document.getElementById('error')
const input = document.querySelector('.input-tec')
const lista = document.getElementById('list')
const techs = []


// ======= Functions =======

// Button new tech
function newTech() {    
    if (input.value != null && notInTechs()) { 
        let newLi = document.createElement('li')
        newLi.setAttribute("class", "card")
        newLi.setAttribute("draggable", "true")
        newLi.setAttribute("ondragstart", "onDragStart(event)")
        newLi.setAttribute("ondrag", "onDrag(event)")
        newLi.setAttribute("ondragend", "onDragEnd(event)")
        newLi.addEventListener('click', checkItem(this))
        lista.appendChild(newLi)

        let newP = document.createElement('p')
        newP.setAttribute("id", "delete-item")
        newP.innerHTML = `${input.value}`
        newLi.appendChild(newP)

        let newSpan = document.createElement('span')
        newSpan.addEventListener('click', removeItem(this))
        newLi.appendChild(newSpan)
                                
        let newImg = document.createElement('img')
        newImg.setAttribute("id", "img")
        newImg.setAttribute("src", "../../public/assets/remove.svg")
        newImg.setAttribute("alt", "Deletar um item")
        newSpan.appendChild(newImg)

        techs.push(input.value.toLowerCase());
        error.innerHTML = ""
    } else {
        error.innerHTML = "Por favor, digite uma nova tecnologia."  
    } 
    input.value = ''
    input.focus()
}

// Input verify
function notInTechs() {
    if (techs.indexOf(input.value.toLowerCase()) == -1) {
        return true
    } else {
        return false
    }
}

// Remove items
function removeItem(item) {
    
} 

// Check items
function checkItem(item) {
    item.classList.toggle('check')
}

// Button check all
function checkAll(){
    lista.classList.toggle('check')
}

// Button remove all
function removeAll(){
    lista.innerHTML = ''
    techs.removeAll()
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

