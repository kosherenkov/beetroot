//https://jsonplaceholder.typicode.com/users
/* 1 ший варіант
xhr.send()
xhr.onload = () => {
    let users = xhr.response
    users = JSON.parse(users)
    console.log(users)
}

*/
//2 варіант


const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=458f0e8e';
    event.preventDefault()
    const s = document.querySelector('input[name=id]').value
    url += '&s=' + s
    formFetch(url)
})

function formFetch(url) {
    let result = fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.error('HTTP error' + response.status);
            }
        })
        .then(response => {
            printMovie(response.Search)
            let pagination = response.totalResults
            if (pagination > 10) {
                let quantityPage = Math.floor(pagination / 10)
                let divpages = document.getElementById('divpages')
                for (let i = 1; i <= quantityPage; i++) {
                    let div = document.createElement('div');
                    div.innerHTML = `<button class="btn">${i}</button>`;
                    divpages.append(div);
                }
                button = document.getElementsByClassName('btn')
                for (let item of button) {
                    item.addEventListener('click', function () {
                        let pageNum = +this.innerHTML
                        newUrl = url + '&page=' + pageNum
                        fetch(newUrl)
                            .then(response => { return response.json() })
                            .then((response) => {
                                printMovie(response.Search)
                                console.log(newUrl)
                            })
                    })
                }

            }
            favoriteMovie()
        })
        .catch(reject => {
            console.error('Щос пішло не так' + reject);
        })
}

function printMovie(param) {
    let wrapper = document.getElementById('wrapper')
    wrapper.innerHTML = ''
    param.map(function (element) {
        let title = element.Title
        let imgMovie = element.Poster
        let idFavoriteBtn = element.imdbID
        let div = document.createElement('div');
        div.innerHTML = `<h2> ${title}</h2><img src='${imgMovie}'><button class='btn__favorite' value='${idFavoriteBtn}'>+</button>`;
        wrapper.append(div);
    })
}

function getLocalStorage() {
    let storageList = [];

    for (let i = 0; i < localStorage.length; i++) {
        storageList.push(localStorage.key(i))
    }

    console.log(storageList)
    return storageList
}

let quantityFavoritesMovies = getLocalStorage()

function favoriteMovie() {
    let favoriteButton = document.getElementsByClassName('btn__favorite')
    for (let item of favoriteButton) {
        item.addEventListener('click', function () {
            let favoriteButtonID = this.value
            console.log(favoriteButtonID)
            window.localStorage.setItem(favoriteButtonID, 'id')

            /* item.style.backgroundColor = 'yellow'
 
             if (localStorage[item] != "yellow") {
                 item.style.backgroundColor = "yellow";
                 localStorage[item] = "yellow";
             } else {
                 item.style.color = "";
                 localStorage[item] = "";
             }*/
            item.classList.toggle('active')

        })
    }
}



/*
function formRequest(url) {
    let xhr = new XMLHttpRequest()
    xhr.onload = () => {

        let users = xhr.response
        if (xhr.readyState === 4) {
            if (xhr.status < 400) {
                let users = xhr.response
                console.log(users)
            } else {
                console.error('error request', xhr.statusText)
            }
        }
    }
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.send()
    xhr.onerror = (err) => { console.error('error request', err) }
}*/

//через fetch



//Class work
/*
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

*/