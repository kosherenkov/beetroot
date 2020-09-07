function getLocalStorage() {
    let storageList = [];

    for (let i = 0; i < localStorage.length; i++) {
        storageList.push(localStorage.key(i))
    }
    console.log(storageList)

    return storageList
}

let oldUserID = getLocalStorage()
let url = 'https://jsonplaceholder.typicode.com/users?'
oldUserID.map(userid => {
    url += 'id=' + userid + '&'
    console.log(url)
})

formFetch(url)

function printTable(arr) {
    let tbody = ''
    arr.map(function (element) {
        tbody += `<tr>
                        <td>${element['id']}</td>
                        <td>${element['name']}</td>
                        <td>${element['username']}</td>
                        <td>${element['email']}</td>
                        <td>${element['phone']}</td>
                        <td><button class='del' data-id=${element['id']}>X</button></td>
                 </tr>`
    })
    document.getElementById('resultTbody').insertAdjacentHTML('beforeend', tbody)

    delElement()
}

function delElement() {
    let btns = document.getElementsByClassName('del');
    for (btn of btns) {
        btn.addEventListener('click', function () {
            let idDel = this.dataset.id
            this.closest('tr').remove()

            localStorage.removeItem(idDel)
        })
    }
}

getLocalStorage()

const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    let url = 'https://jsonplaceholder.typicode.com/users'
    event.preventDefault()
    const id = document.querySelector('input[name=id]').value
    url += '?id=' + id
    formFetch(url)

    window.localStorage.setItem(id, 'id')
    document.querySelector('input[name=id]').value = ''
})

function formFetch(url) {
    let result = fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.error('Http error', response.status)
                return 'error'
            }
        })
        .catch(reject => {
            console.error('Шось пішло не так', reject)
        })
        .then(response => {
            printTable(response)
        })

}