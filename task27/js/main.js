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

/*let objTime = {
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

/*}
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
console.log(showTime()) */

/*const person = {
    name: "Artem",
    age: 27,
    secondName: "Kosherenkov"
}

document.write("<table> <tbody> <tr>")

for (let key in person) {
    document.write("<tr> <td>" + key + ": </td> ")
    document.write("<td>" + person[key] + "</td> </tr>")

}

document.write("</tbody> </table>")*/

/*let timeNow = new Date(2020, 7, 2, 15, 30, 55)

console.log(timeNow)

let now = new Date();

let time = {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
}

document.write(`Година: ${time.hours} : ${time.minutes} : ${time.seconds}`)

console.log(time)
*/

/*function user(name, prizv, zarplata) {
    this.name = name;
    this.prizv = prizv;
    this.zarplata = zarplata;
}

let users = {};

users = {
    user1 = new user('Vasia', 'Ivanov', 1500),
    user2 = new user('Vania', 'Osipov', 2000),
    user3 = new user('Petia', 'Petrosian', 2500)
}

console.log(users)*/

/*
let persons = {
    'Ivan Ivanov': 3000,
    'Petia Petrov': 2000,
    'Silvia Buh': 5000
}

let sum = 0

function newSalary(persons) {
    for (let key in persons) {
        persons[key] = +prompt("Нова зарплата для: " + [key])
    }
    return persons
}

function salarySum(obj) {
    for (let key in obj) {
        sum = obj[key] + sum
    }
    return sum
}*/

let quantityUsers = +prompt("Введіть кількість користувачів")
let i = 0

function howManyUser(quantityUsers) {
    if (quantityUsers > 0) {
        for (i; i < quantityUsers; i++) {
            let newPerson = prompt("Ім'я Прізвище Запплата: ")
            parseUser(newPerson, i)
        }
    }
    return parseUser
}

var persons = []

function parseUser(newPerson, i) {

    let name = newPerson.substr(0, newPerson.indexOf(' '))
    newPerson = newPerson.substring(newPerson.indexOf(' ') + 1)

    let sureName = newPerson.substr(0, newPerson.indexOf(' '))
    newPerson = newPerson.substring(newPerson.indexOf(' ') + 1)

    let sallary = newPerson
    persons[i] = new person(name, sureName, sallary)
    return persons
}

howManyUser(quantityUsers)
console.log(persons)

function person(name, lastName, sallary) {
    this.name = name;
    this.lastname = lastName;
    this.sallary = sallary;
}


/*let person1 = [
    /* new person('Vasia', 'Ivanov', 5000),
     new person('Vania', 'Osipov', 2000),
     new person('Petia', 'Petrosian', 3000),

    new person(name, sureName, sallary)
]*/

let sum = 0
persons.forEach(function (value) {
    sum = +value.sallary + sum
})

document.write("<table> <tbody> <tr>")

//alert(`${value} має позицію ${index} в ${persons}`)
for (i = 0; i < persons.length; i++) {
    document.write("<tr> <td>" + i + ": </td> ")
    document.write("<td>" + persons[person] + "</td> </tr>")
}
/*document.write("<tr> <td>" + index + ": </td> ")
document.write("<td>" + persons[value] + "</td> </tr>")*/
document.write("</tbody> </table>")

/*for (i = 0; i < persons.length; i++) {
    document.write("<tr> <td>" + i + ": </td> ")
    document.write("<td>" + persons[i] + "</td> </tr>")
}*/


console.log("Сума зарплат: " + sum)
document.write("<p>Сума зарплат: " + sum + "</p>")
//console.log(newSalary(persons))
//console.log(salarySum(persons))