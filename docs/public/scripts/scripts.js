// ======= Variables/ DOM =======
const error = document.getElementById('error')
const input = document.querySelector('.input-tec')
const content = document.querySelector('.content-tech')
const list = document.querySelector('#list')
let techs = []


// ======= Functions =======

// Button new tech
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
            list.removeChild(liElement)
            let idx = techs.indexOf(input.value.toLowerCase())
                if (idx != undefined) {
                    techs.splice(idx, 1)
                }
                if (techs.length <= 5) {
                    list.style.height = '22rem'
                    content.style.margin = '4rem auto 2rem'
                }
        })
        liElement.appendChild(spanElement)
                                
        let imgElement = document.createElement('img')
        imgElement.setAttribute("id", "img-del")
        imgElement.setAttribute("src", "public/assets/remove.svg")
        imgElement.setAttribute("alt", "Deletar um item")
        spanElement.appendChild(imgElement)

        techs.push(input.value.toLowerCase())
        error.innerHTML = ''

        if (techs.length >= 5) {
            list.style.height = 'auto'
            content.style.margin = '2rem auto 2rem'
        }

    } else {
        error.innerHTML = 'Por favor, digite uma nova tecnologia.' 
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

// Button check all
function checkAll() {
    if (techs.length == 0) {
        error.innerHTML = 'Por favor, digite uma nova tecnologia.'
    } else {
        for (let li of list.children)
            li.classList.toggle('check')
    }
}

// Button remove all
function removeAll() {
    if (techs.length == 0) {
        error.innerHTML = 'Por favor, digite uma nova tecnologia.'
    } else {
        list.innerHTML = ''
        techs = []
        list.classList.remove('check')

        list.style.height = '20rem'
        content.style.margin = '3.2rem auto 1rem'
    }
}


// ======= Drag Events =======

new Sortable(list, {
    animation: 350
})
