
/*
let url = 'https://jsonplaceholder.typicode.com/users';

let xhr = new XMLHttpRequest()


xhr.open('GET', url)

/* 1 ший варіант
xhr.send()
xhr.onload = () => {
    let users = xhr.response
    users = JSON.parse(users)
    console.log(users)
}
*/

/*2 варіант
xhr.responseType = 'json'
xhr.send()

xhr.onload = () => {
    let users = xhr.response
    console.log(users)
}

*/

//Class work

let urlGallery = 'https://jsonplaceholder.typicode.com/photos?albumId=1'

let data = new XMLHttpRequest()
data.open('Get', urlGallery)
data.responseType = 'json'
data.send()


data.onload = () => {
    let gallery = data.response
    printGallery(gallery)
}

function printGallery(param) {

    param.forEach(function (element) {
        let elementFoto = element.url
        let elementTitle = element.title

        let wrapper = document.getElementById('wrapper')
        let div = document.createElement('div');

        div.innerHTML = `<h2 class="title">${elementTitle}</h2><a href='${elementFoto}'  data-fancybox data-caption="Caption for single image"><img src='${elementFoto}' alt='${elementTitle}' class='wrapper__img'></a>`;

        wrapper.append(div);


        console.log(elementFoto)
    })
}