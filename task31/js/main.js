
let block;
let block_r;
let delta_w = 0;
let delta_h = 0;

onload = function () {
    block = document.getElementById("block");
    block_r = document.getElementById("block_resize");
    document.onmouseup = clearXY;
    block_r.onmousedown = saveWH;
}

function getXY(obj_event) {
    if (obj_event) {
        x = obj_event.pageX;
        y = obj_event.pageY;
    }
    else {
        x = window.event.clientX;
        y = window.event.clientY;
    }
    return new Array(x, y);
}

function saveWH(obj_event) {
    let point = getXY(obj_event);

    w_block = block.clientWidth;
    h_block = block.clientHeight;
    delta_w = w_block - point[0];
    delta_h = h_block - point[1];

    document.onmousemove = resizeBlock;

    return false;
}

function clientWidth() {
    return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
}

function clientHeight() {
    return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
}


function clearXY() {
    document.onmousemove = null;
}

function resizeBlock(obj_event) {
    let point = getXY(obj_event);

    new_w = delta_w + point[0];
    new_h = delta_h + point[1];
    block.style.width = new_w + "px";
    block.style.height = new_h + "px";


    if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft) + "px";
    if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop) + "px";
}



let textDiv = document.getElementById("blockText")
let textArea = document.getElementById("textarea")
let text = document.getElementById("text")


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const keyCtrl = event.ctrlKey

    if (keyName === 'Control') {
        return;
    }

    if (event.ctrlKey) {
        alert(` Ctrl + ${keyName}`);
    } else {
        return;//alert(`Key pressed ${keyName}`);
    }

    if (keyName == 'q') {
        openTextArea()
    }
    if (keyName == 'm') {
        saveText()
    }

}, false);

function openTextArea() {
    let rez
    rez = text.innerText
    textDiv.style.display = "none"
    textArea.style.display = "block"

    textArea.insertAdjacentText('afterbegin', rez)

    return rez
}

function saveText() {
    let saveRez = textArea.value
    text.innerText = ""
    text.insertAdjacentText('afterbegin', saveRez)

    //console.log(saveRez)
    textArea.style.display = "none"
    textDiv.style.display = "block"
}


new Tablesort(document.getElementById('table-id'));
















