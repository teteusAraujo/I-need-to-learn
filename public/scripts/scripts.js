// ======= Variables/ DOM =======
const error = document.getElementById('error')
const input = document.querySelector('.input-tec')
const lista = document.getElementById('list')
let techs = []


// ======= Functions =======

// Input verify
function notInTechs() {
    if (techs.indexOf(input.value.toLowerCase()) == -1) {
        return true
    } else {
        return false
    }
}

// Button new tech
function newTech() {    
    if (input.value != '' && notInTechs()) { 
        let liElement = document.createElement('li')
        liElement.setAttribute("class", "card")
        liElement.setAttribute("draggable", "true")
        liElement.setAttribute("ondragstart", "onDragStart(event)")
        liElement.setAttribute("ondrag", "onDrag(event)")
        liElement.setAttribute("ondragend", "onDragEnd(event)")
        liElement.addEventListener('click', () => {    // Check item
            liElement.classList.toggle('check')
        })
        lista.appendChild(liElement)

        let pElement = document.createElement('p')
        pElement.setAttribute("id", "delete-item")
        pElement.innerHTML = `${input.value}`
        liElement.appendChild(pElement)

        let spanElement = document.createElement('span')
        spanElement.addEventListener('click', () => {    // Delete item
            lista.removeChild(liElement);
            let idx = techs.indexOf(input.value.toLowerCase())
                if (idx != undefined) {
                    techs.splice(idx, 1)
                }
        })
        liElement.appendChild(spanElement)
                                
        let imgElement = document.createElement('img')
        imgElement.setAttribute("id", "img-del")
        imgElement.setAttribute("src", "../../public/assets/remove.svg")
        imgElement.setAttribute("alt", "Deletar um item")
        spanElement.appendChild(imgElement)

        techs.push(input.value.toLowerCase());
        error.innerHTML = ""
    } else {
        error.innerHTML = "Por favor, digite uma nova tecnologia."  
    } 
    input.value = ''
    input.focus()
}

// Button check all
function checkAll() {
    lista.classList.toggle('check')
}

// Button remove all
function removeAll() {
    lista.innerHTML = ''
    techs = []
}


// ======= Drag Events =======

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
