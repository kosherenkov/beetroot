/*let students = ["Petia", "Vsia", "Anton"]

let newStudents = ["Kolia", "Valera"]

function addStudent() {
    let newStudent = true
    while (newStudent) {
        newStudent = prompt("Введіть студента")
        students.push(newStudent)
        console.log(students)
    }
    return students
}

addStudent()

let lastDel

function delStudent() {
    lastDel = students.pop()
    console.log(students)
}

function returnStudent() {
    students.push(lastDel)
    console.log(students)
}*/

/*let students = [{
        name: "Nick",
        grade: 10,
        offset = true
    },
    {
        name: "John",
        grade: 0,
        offset = true
    },
    {
        name: "Julia",
        grade: 19,
        offset = false
    },
    {
        name: "Nathalie",
        grade: 9,
        offset = false
    },
    {
        name: "Evgen",
        grade: 0,
        offset = false
    },
    {
        name: "Kolya",
        grade: 8,
        offset = true
    },
    {
        name: "Petya",
        grade: 9,
        offset = true
    },
]

//сортування масиву
students.sort((a, b) => {
    return (b.offset - a.offset)
})

//let allStudents = students.concat(newStudents)

/*students.forEach(function (element, index) {

    let grade = element.grade

    if (grade == 0) {
        let newGrade = +prompt(`Введіть оцінку для: ${element.name}`)
        element.grade = newGrade
    }

})*/

/*allStudents.map(function (elem, index, arr) {
    document.write("<p> Student " + index + ":" + elem + "</p>")
})*/

//students.sort()

//console.log(students)

// Homework 28 task 2

/*let goods = [
    { name: "bread", quantity: 1, price: 20 },
    { name: "tea", quantity: 1, price: 50 },
    { name: "butter", quantity: 1, price: 66 },
    { name: "sweets", quantity: 1, price: 33 },
    { name: "beer", quantity: 1, price: 120 },
    { name: "water", quantity: 1, price: 6 }
];

let suma = 0 //todo - Суму добавити у ф-ю
goods.forEach(function (elem) {
    suma = +elem.price + suma
})

// Кількість товарів
let quantity, averageCost

function serSuma() {
    quantity = goods.length
    averageCost = suma / quantity

    return averageCost.toFixed(2)
}

//Максимальний елемент
let max = 0
let maxArray = []
goods.forEach(function (element) {
    max = element.price
    maxArray.push(max)
})

//Виведення
function showGoods() {
    goods.forEach(function (element) {
        element = (element.name + ": " + element.quantity + " - " + element.price + " грн")
        document.write(element + " " + "</br>")
    })
}

showGoods()

document.write("<p> Сума покупок: " + suma + "</p>")
document.write("<p>Найдорожча покупка: " + (Math.max(...maxArray)))
document.write("<p>Середня вартість одного товару: " + serSuma() + "</p>")*/

// Homework 28 task 3
/*
let ourText = ""
let ourStyle = [
    { name: "color:", value: "green" },
    { name: "font-size:", value: "35px" }
]

ourText = prompt("Введіть текст")
let p

document.write("<p style='")
//p = document.querySelector("p")
ourStyle.forEach(function (element) {
    atr = element.name
    znachAtr = element.value
    console.log(atr + znachAtr)
    document.write(atr + znachAtr + ";")
    //p.setAttribute("style", atr + znachAtr)
})

document.write("'>" + ourText + "</p>")*/

//Homework 28 task 1

let shopping = [
    { name: "bread", quantity: 2, status: true },
    { name: "rice", quantity: 1, status: true },
    { name: "water", quantity: 1, status: true },
    { name: "chockolate", quantity: 1, status: false },
    { name: "beer", quantity: 2, status: false }
]

shopping.sort((a, b) => {
    return (a.status - b.status)
})

function showShopping() {
    shopping.forEach(function (element) {
        name = element.name
        quantity = element.quantity
        status = element.status
        document.write("<p>" + name + " - " + quantity + "</p>")
    })
}

function buyProduct() {
    inputProduct = prompt("Введіть назву продукта та кількість")
    let parsePrompt = inputProduct.split(' ')

    return parsePrompt
}

let newArr = buyProduct()

newArr.forEach(function (element, index) {
    index = newArr[0]
    kilkist = newArr[1]
    index = "name:" + element
    kilkist = "quantity" + element
})

console.log(newArr)

function toObject(newArr) {
    let rv = {};
    for (let i = 0; i < newArr.length; ++i)
        rv[i] = newArr[i];

    return rv;
}

let newObj = toObject(newArr)
//console.log(newObj)

showShopping()



