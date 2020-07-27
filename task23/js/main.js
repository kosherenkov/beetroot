"use strict";

// task1
/*
let age = prompt("Скільки вам років?");
if (age <= 2) {
    document.write("Child");
} else if (age > 12 && age <= 18) {
    document.write("teenager");
} else if (age > 18 && age <= 60) {
    document.write("man");
} else if (age > 60) {
    document.write("pensioner");
}*/

/*let a = prompt("Введіть число");
if (a < 1000 && a > 99) {
    if (Math.round(a / 100 % 10) == Math.round(a / 10 % 10) ||
        (Math.round(a / 10 % 10) == Math.round(a % 10) ||
            (Math.round(a / 100 % 10) == Math.round(a % 10)) {
                alert("ok");
            } else {
                alert("not ok");
            } else {
                alert("Число не тризначне");
            }
        }*/

/*let number = +prompt("Введіть число між 0 і 3");

switch (number) {
    case 0:
        alert("Ви ввели 0")
        break;
    case 1:
        alert("Ви ввели 1")
        break;
    case 2:
        alert("Ви ввели 2")
        break;
    case 3:
        alert("Ви ввели 3")
        break;
    default:
        alert("Ви ввели невірне число");
}*/
/*let i = 0;
while (i <br 5) {
    console.log(i);
    i++;
}*/

/* Піраміда
let a = "&nbsp;&nbsp;";
let b = "*";
document.write(a)
document.write(a)
document.write(a)
document.write(a)
document.write(a)
document.write(a)
document.write(a)
document.write(b)
document.write("</br>")

for (let i = 0; i < 6; i++) {
    for (let j = 6;
        (j - i) > 0; j--) {
        document.write(a)
    }
    b += "**"
    document.write(b)
    document.write("</br>")
}*/

/*
for (let i = 2; i < 11; i++) {
    if (i % 2 == 0) {
        alert(i)
    }

}*/

/* Завдання 2 Сума
let num = 0;
let i = 0;
let sum = 0;

do {
    num = +prompt("Введіть число");
    i++;
    sum = sum + num;
}
while (num);

document.write(`Кількість цифр: ${i-1}`);
document.write("</br>");
document.write(`Сума цифр: ${sum}`);*/


/* Завдання 4
let num = prompt("Введіть число");
let quantity;

quantity = num.length;

document.write(quantity);*/

/*Завдання 9 таблиця множення
let cols = 9,
    rows = 9;
document.write("<table>");
for (var i = 1; i <= cols; i++) {
    document.write("<tr>");
    for (var j = 1; j <= rows; j++) {
        document.write("<td style='text-align:center;'>" + (i * j) + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");*/

/*2 в степені
function st(a, s) {
    let rez = a;
    for (let i = 1; i < s; i++) {
        rez = rez * a;
    }

    return rez;
}

console.log(st(2, 3));*/