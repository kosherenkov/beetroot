/*class classRoom {
    constructor(name, countSeats, faculty) {
        this.name = name;
        this.countSeats = countSeats;
        this.faculty = faculty;
    }
    showStudents() {
        // console.log(this.name + this.countSeats + this.faculty)
        document.write
    }
    get countSeats() {
        return this._countSeats
    }

    set countSeats(count) {
        if (typeof count != 'number') {
            count = +prompt("Введіть число")
        }
        this._countSeats = count
    }

    printInTable() {
        document.write
    }

}

let newClass = new classRoom("Programer ", 30, " Mathematics")

let univer = [
    new classRoom("Programmer", '30', "Mathematics"),
    new classRoom("Fisical", 20, "Mathematics"),
    new classRoom("Mathematics", 40, "Mathematics")

]
console.log(univer)
newClass.showStudents()

console.log(univer)

*/

//Home work 29 task 3
/*
class Employee {
    constructor(name, position, price) {
        this.name = name;
        this.position = position;
        this.price = price
    }
    static writeHead() {
        document.write("<table><thead><tr><th>name</th><th>position</th><th>price</th></tr></thead><tbody>")
    }
    static writeFoot() {
        document.write("</tbody></table>")
    }
    showWorker() {
        document.write("<tr><td>" + this.name + "</td><td>" + this.position + "</td><td>" + this.price + "</td><tr>")
    }
}

class EmpTable extends Employee {
    constructor() {
        super();
    }
}

let workerBank = [
    new Employee("Artem", "manager", 3000),
    new Employee("Kolia", "manager", 3000),
    new Employee("Vica", "consultant", 2000),
    new Employee("Maria", "consultant", 2000),
    new Employee("Vasia", "boss", 5000)
]

let objEmpTable = new EmpTable()

Employee.writeHead()
workerBank.map(el => el.showWorker())
Employee.writeFoot()

console.log(objEmpTable)*/

//Home work 29 task 1 

class marker {
    constructor(color, kilkChornil) {
        this.color = color;
        this.kilkChornil = kilkChornil = 100;
    }

    showText() {
        let ourText = prompt("Введіть текст")
        let kikkistBukv = ourText.length
        this.kilkChornil = this.kilkChornil - (kikkistBukv / 2)
        let colorText = prompt("Введіть колір тексту(red, green, yellow)")
        document.write("<p style='color:")
        colors.forEach(function (elem) {
            let col
            if (colorText == elem.color) {
                col = elem.color
                document.write(col + ";")
                document.write("'>" + ourText + "</p>")
                console.log("true")
            } else {
                console.log("false")
            }
            //this.color = elem.color
        })
    }
}

let colors = [
    new marker("green", 100),
    new marker("red", 100)
]

let newMarker = new marker
newMarker.showText()
console.log(newMarker)

