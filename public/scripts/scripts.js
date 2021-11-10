// ======= Variables/ DOM =======
const error = document.getElementById('error')
const input = document.querySelector('.input-tec')
const lista = document.getElementById('list')
const content = document.querySelector('.content-tech')
let techs = []


// ======= Functions =======

// == Input verify ==
function notInTechs() {
    if (techs.indexOf(input.value.toLowerCase()) == -1) {
        return true
    } else {
        return false
    }
}

// == Button new tech ==
input.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        newTech()
    }
})

function newTech() {    
    if (input.value != '' && notInTechs()) { 
        let liElement = document.createElement('li')
        liElement.setAttribute("id", "card")
        liElement.setAttribute("draggable", "true")

        liElement.addEventListener('dragstart', onDragStart)
        liElement.addEventListener('drag', onDrag)
        liElement.addEventListener('dragend', onDragEnd)
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

        if (techs.length >= 4) {
            lista.style.height = 'auto'
            content.style.margin = '1rem auto 2rem'
        }

    } else {
        error.innerHTML = "Por favor, digite uma nova tecnologia."  
    } 
    input.value = ''
    input.focus()
}

// == Button check all ==
function checkAll() {
    lista.classList.toggle('check')
}

// == Button remove all ==
function removeAll() {
    lista.innerHTML = ''
    techs = []
    lista.style.height = '17rem'
    content.style.margin = '4rem auto 2rem'
}


// ======= Drag Events =======

// == Draggable element ==
function onDragStart(e) {
    e.dataTransfer.setData('text', e.target.id)
    e.target.style.background = 'rgba(128, 0, 128, 0.5)'
}

function onDrag(e) {
    e.target.style.cursor = 'move'
}

function onDragEnd(e) {
    e.target.style.background = ''
}

// == Drop targets ==
function onDragEnter(e) {
    e.preventDefault()
}

function onDragOver(e) {
    e.preventDefault()
}

function onDragLeave() {
}

function onDrop(e) {
    e.preventDefault()

    var data = e.dataTransfer.getData('text')
    e.target.appendChild(document.getElementById(data))
}
