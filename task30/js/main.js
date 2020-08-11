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
let status

function selectNextNode() {
    resetColor();
    if (node == null) {
        let list = document.getElementById("list2");
        node = list.firstChild;
        node.style.background = colors[0];
        return;
    }
    // Получение следующего элемента, которые в дереве находиться на одном уровне.
    node = node.nextSibling;
    // console.log(node);
    if (node != null) {
        node.style.background = colors[1];
    }

    nextColor()
    //setTimeout(resetColor, 3000)
}


function nextColor() {
    node = node.nextSibling;
    if (node != null) {
        node.style.background = colors[2];
    }
}


function resetColor() {
    let liList = document.getElementsByTagName("li");
    for (let i = 0; i < liList.length; i++) {
        liList[i].setAttribute("style", "background:white");
    }
}
