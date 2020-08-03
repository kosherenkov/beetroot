//Завдання 1
/*let auto = {
    name: "Meseder",
    model: "Vito",
    year: 2010,
    speed: 90
}

let mSpeed = auto.speed
let vidstan

let distance = +prompt("Введіть відстань")
auto["dist"] = distance
vidstan = auto.dist

function hours(vidstan, mSpeed) {
    let time
    time = (vidstan / mSpeed) * 1.17; //Костильний метод, не знаю як зробити щоб він відпочивав кожні 4 год, вирахував приблизний коефіцієнт
    Math.floor(time)
    return time.toFixed(1)
}

console.log("Відстань " + auto.dist + " км")
console.log("Проїде за: " + hours(vidstan, mSpeed) + " год")*/

//Завдання 3 працює з помилками

let objTime = {
    hour: 20,
    minute: 35,
    seconds: 55,
}

let seconds = objTime.seconds
let minute = objTime.minute
let hour = objTime

function changeSeconds(seconds) {
    sec = objTime.seconds + seconds
    min = objTime.minute

    if (sec >= 60) {
        //sec = sec - objTime.seconds
        rezSec = (sec - 60)
        sec = rezSec
        min++
        objTime.minute = min
        objTime.seconds = sec
        /*  if (sec < 10) {
              sec = "0" + sec
              
          }*/

    }
    return objTime.seconds = sec
}

function showTime(hours, minute, seconds) {
    hours = objTime.hour
    minute = objTime.minute
    seconds = objTime.seconds
    let ourTime = "Година: " + hours + ":" + minute + ":" + seconds

    return ourTime
}


console.log(changeSeconds(64))
console.log(objTime)
console.log(showTime())