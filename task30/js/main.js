//todo Class work task 30 start
/*
console.log(document.body.firstElementChild)

console.log(document.body.firstElementChild.nextElementSibling)


let table = document.getElementById('age-table')
table.style.border = '3px solid green'

let labelAll = table.querySelectorAll('label')

for (let elem of labelAll) {

    elem.style.fontWeight = 'bold'
}

table.rows[0].cells[0].style.cssText = "font-size: 24px; font-weight: bold;"

let ourForm = document.getElementsByName('search')[0].style.height = '50px'

let inputForm = document.querySelector("[name='search']")
inputForm.querySelectorAll('input')[0].style.width = '530px'

let inputs = inputForm.querySelectorAll('input')
inputForm.querySelectorAll('input')[inputs.length - 1].hidden = true


//new div

let newDiv = document.createElement('div')
//newDiv.innerText = ('Hello word')
newDiv.innerHTML = '<h1>Hello word</h1>'

document.body.insertBefore(newDiv, inputForm)

//document.body.append(newDiv)
function clearChildrenClass() {
    let list = document.getElementsByClassName('list')[0]
    let items = list.children
    for (let item of items) {
        item.classList.remove('active')
    }
}

function selectFirstEl() {
    clearChildrenClass()
    let firstElement = document.getElementsByClassName('list__item')[0]
    firstElement.classList.add('active')
}

function selectLastChild() {
    clearChildrenClass()
    let list = document.getElementsByClassName('list')[0]
    list.lastElementChild.classList.add('active')
    firstElement.classList.add('active')
}

function addChild() {
    let newElement = document.createElement('li')
    newElement.setAttribute('class', 'list__item')
    newElement.innerText = "New Element"
    document.getElementsByClassName('list')[0].append(newElement)
}
*/
//todo Class work task 30 end

//todo Home work 30 task 1

function showList() {
    let div = document.getElementById('list');
    let ol = document.createElement('ol');

    div.appendChild(ol);

    playList.forEach(function (element) {
        let author = element.author
        let song = element.song
        let li = document.createElement('li')
        li.innerHTML = author + " - " + song
        ol.appendChild(li)
    })
}

let playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" }
]


//todo task 2

let modal = document.querySelector('.popup')
let overflow = document.createElement('div')
let popupBtn = document.getElementsByClassName('popup__close')[0]

function showModal() {
    overflow.className = "overflow"
    document.body.appendChild(overflow)

    let height = modal.offsetHeight;
    modal.style.marginTop = - height / 2 + "px"
    modal.style.top = "50%"
}

overflow.onclick = function () {
    modal.style.top = "-100%"
    overflow.remove()
}

popupBtn.onclick = function () {
    //modal.style.display = "none"
    modal.style.top = "-100%"
    overflow.remove()
}


//todo task 3


let colors = ["red", "yellow", "green"]

window.onload = function () {
    let list = document.getElementById("list2");
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.innerText = `color ${i + 1}`;
        list.appendChild(li);
    }
}

let node = null;
let i = 0

function selectNextNode() {
    resetColor();
    /* if (node == null) {
         let list = document.getElementById("list2");
         node = list.firstChild;
         node.style.background = colors[0];
         return;
     }
     // Получение следующего элемента, которые в дереве находиться на одном уровне.
     node = node.nextSibling;
     console.log(node);
 
 
     if (node != null) {
         node.style.background = colors[1];
     }*/

    let items = document.querySelectorAll('li')
    items[i].style.background = colors[i]
    i++
    if (i >= colors.length) {
        i = 0
    }
}

function resetColor() {
    let liList = document.getElementsByTagName("li");
    for (let i = 0; i < liList.length; i++) {
        liList[i].setAttribute("style", "background:white");
    }
}



//!

let divText = document.getElementById('text')
let buttonClick = document.getElementById('buttonClick')

buttonClick = document.querySelectorAll('.buttonClick')
//buttonClick.addEventListener('click', hiddinDiv)

for (let button of buttonClick) {
    button.addEventListener('click', hiddinDiv)
}
function hiddinDiv() {
    // divText.style.display = "none"
    this.style.visibility = "hidden"

}

/*
let elem = document.getElementById('buttonID')
class Menu {
    handleEvent(event) {
        switch (event.type) {
            case "mousedown":
                elem.innerText = "Натиснута кнопка"
                break
            case "mouseup":
                elem.innerText += "... і відтиснута кнопка"
                break
        }
    }
}

let menu = new Menu()
elem.addEventListener('mousedown', menu)
elem.addEventListener('mouseup', menu)

*/


let menuElem = document.getElementById('sweet')
let titleElem = document.querySelector('.title')

titleElem.addEventListener('click', menuToggler)

function menuToggler() {
    menuElem.classList.toggle('open')
}


////////////////

let form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    let errorElems = d.querySelectorAll('.error')
    for (let errorElem of errorElems) {
        errorElem.classList.remove('error')
    }
    let errorMes = d.querySelectorAll('.error-mes')
    for (let item of errorMes) {
        item.remove()
    }

    validForm()
})

const d = document
function validForm() {
    let required = d.querySelectorAll('.required')
    let errorText = "Заповніть обов\'язкові поля"
    let errorBlock = "<span class='error-mes'>" + errorText + "</span>"

    for (let input of required) {
        if (input.value == "") {
            input.classList.add('error')
            input.insertAdjacentHTML("afterend", errorBlock)
            event.preventDefault()
        }

    }
}
