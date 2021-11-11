// ======= Variables/ DOM =======
const error = document.getElementById('error')
const input = document.querySelector('.input-tec')
const content = document.querySelector('.content-tech')
const list = document.querySelector('.draggable-list')
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
        liElement.setAttribute("class", "card")
        liElement.setAttribute("draggable", "true")

        liElement.addEventListener('click', () => {    // Check item
            liElement.classList.toggle('check')
        })
        list.appendChild(liElement)

        let pElement = document.createElement('p')
        pElement.setAttribute("id", "delete-item")
        pElement.innerHTML = `${input.value}`
        liElement.appendChild(pElement)

        let spanElement = document.createElement('span')
        spanElement.addEventListener('click', () => {    // Delete item
            list.removeChild(liElement);
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
            list.style.height = 'auto'
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
    list.classList.toggle('check')
}

// == Button remove all ==
function removeAll() {
    list.innerHTML = ''
    techs = []
    list.style.height = '17rem'
    content.style.margin = '4rem auto 2rem'
}


// ======= Drag Events =======

new Sortable(list, {
    animation: 350
})

/*// == Draggable element ==
function onDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id)
    e.target.style.background = 'rgba(128, 0, 128, 0.5)'
}

function onDrag(e) {
    e.target.style.cursor = 'move'
}

function onDragEnd(e) {
    e.target.style.background = ''
    
}

// == Drop targets ==
function onDragEnter(ev) {
    ev.preventDefault()
}

function onDragOver(ev) {
    ev.preventDefault()
}

function onDragLeave(ev) {
    ev.classList.remove('over')
}

function onDrop(ev) {
    const id = ev.dataTransfer.getData('text')
    const draggable = document.getElementById(id)

    ev.target.appendChild(draggable)
    ev.dataTransfer.clearData()
}
*/