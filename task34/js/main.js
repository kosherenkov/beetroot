let map;
let coordinats = [
    { lat: 51.491647, lng: 31.299510, content: 'home' },
    { lat: 50.446102, lng: 30.614153, content: 'work' },
    { lat: 51.141210, lng: 31.859508, content: 'villa' }
]

let center = { lat: 51.018744, lng: 31.113046 }
center = calcCenter(coordinats)
console.log(center)

function calcCenter(arr) {
    let sumLat = 0
    let sumLng = 0
    arr.forEach(function (element, index) {
        sumLat = +element.lat + +sumLat
        sumLng = +element.lng + +sumLng
    })
    let latNew, lngNew = ''

    latNew = sumLat / arr.length
    lngNew = sumLng / arr.length

    let rez = { lat: latNew, lng: lngNew }

    return rez
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 8

        //styles - свої стилі для карти
        //disableDefoult - виключити стандартні значки на карті
    });



    coordinats.forEach(function (element) {
        let marker = new google.maps.Marker({
            position: element,
            map: map,
            icon: 'img/icon.png'
        })
        const infoWindow = new google.maps.InfoWindow({
            content: '<h1 class="mapWindow">' + element.content + '</h1>'
        })
        marker.addListener('click', function () {
            infoWindow.open(map, marker)
        })
    })
}