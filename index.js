import promptSync from 'prompt-sync';
import {
    showTable, totalStudents, showStudentsNames, deleteStudent, deleteAleatoryStudent,
    onlygirls, totalBoysGirls, allgirls, onlyYoung, newRandomStudent, getYoungest, getMeanAge,
    getGirlsMeanAge, addNewEvaluation, sortByName, getBestStudent, getBestStudent2, addExtraPoint
} from './utils.js';

const prompt = promptSync();

// lista de alumnos
let students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'eduardo'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 21,
    examScores: [],
    gender: 'male',
    name: 'Mart'
  },
  {
    age: 24,
    examScores: [],
    gender: 'female',
    name: 'poli'
  }]

function printOptions() {
    console.log("Selecciona una de las siguientes opciones:");
    console.log("1 - Mostrar en formato de tabla todos los alumnos.");
    console.log("2 - Mostrar por consola la cantidad de alumnos que hay en clase.");
    console.log("3 - Mostrar por consola todos los nombres de los alumnos.");
    console.log("4 - Eliminar el último alumno de la clase.");
    console.log("5 - Eliminar un alumno aleatoriamente de la clase.");
    console.log("6 - Mostrar por consola todos los datos de los alumnos que son chicas.");
    console.log("7 - Mostrar por consola el número de chicos y chicas que hay en la clase.");
    console.log("8 - Mostrar true o false por consola si todos los alumnos de la clase son chicas.");
    console.log("9 - Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.");
    console.log("10 - Añadir un alumno nuevo aleatorio.");
    console.log("11 - Mostrar por consola el nombre de la persona más joven de la clase.");
    console.log("12 - Mostrar por consola la edad media de todos los alumnos de la clase.");
    console.log("13 - Mostrar por consola la edad media de las chicas de la clase.");
    console.log("14 - Añadir nueva nota a los alumnos. Por cada alumno de la clase.");
    console.log("15 - Ordenar el array de alumnos alfabéticamente según su nombre.");
    console.log("16 - Mostrar por consola el alumno de la clase con las mejores notas.");
    console.log("17 - Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.");
    console.log("18 - Añadir un punto extra a cada nota existente de todos los alumnos. .");

    console.log("T - Mostrar todas las opciones.");
    console.log("S - Salir.");
}

function main() {
    printOptions();
    let running = true;

    while (running) {
        console.log("");
        const rawOption = prompt("Introduce tu opción (T - Para mostrar todas.): ");
        const option = rawOption.toLowerCase();
        switch (option) {
            case "1":
                showTable(students);
                break;
            case "2":
                totalStudents(students);
                break;
            case "3":
                showStudentsNames(students);
                break;
            case "4":
                students = deleteStudent(students);
                break;
            case "5":
                students = deleteAleatoryStudent(students);
                break;
            case "6":
                onlygirls(students);
                break;
            case "7":
                totalBoysGirls(students);
                break;
            case "8":
                allgirls(students);
                break;
            case "9":
                onlyYoung(students);
                break;
            case "10":
                students = newRandomStudent(students);
                break;
            case "11":
                getYoungest(students);
                break;
            case "12":
                getMeanAge(students);
                break;
            case "13":
                getGirlsMeanAge(students);
                break;
            case "14":
                students = addNewEvaluation(students);
                break;
            case "15":
                students = sortByName(students);
                break;
            case "16":
                getBestStudent(students);
                break;
            case "17":
                getBestStudent2(students);
                break;
            case "18":
                students = addExtraPoint(students);
                break;
            case "t":
                printOptions();
                break;
            case "s":
                running = false;
                break;
            default:
                console.log("Opción invalida.")
                break;
        }
    };
}

main();