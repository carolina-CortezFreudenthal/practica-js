const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

// ### 1- Mostrar en formato de tabla todos los alumnos. 
export function showTable(students) {
    console.log("Tabla de alumnos:")
    console.table(students, ['name','gender','age','examScores'])
}

// ### 2- Mostrar por consola la cantidad de alumnos que hay en clase.
export function totalStudents(students) {
    console.log("Cantidad de alumnos en total :")
    console.log(students.length)
}

// ### 3- Mostrar por consola todos los nombres de los alumnos.
export function showStudentsNames(students) {
    console.log("Nombres de los alumnos: ")
    const names = []
    for (const student of students) {
        names.push(student.name)
    }
    console.log(names.join(', '))
}
//### 4- Eliminar el último alumno de la clase.
export function deleteStudent(students) {
    console.log("El último alumno eliminado es: ")
    console.log(students.pop().name)
    return students;
}

//### 5- Eliminar un alumno aleatoriamente de la clase.
export function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function deleteAleatoryStudent(students) {
    const numRandom = getRandomArbitrary(0, students.length)
    const delStudent = students[numRandom]
    students.splice(numRandom,1)
    console.log("El siguiente alumno fue eliminado: ")
    console.log(delStudent.name)
    return  students;
}

// ### 6- Mostrar por consola todos los datos de los alumnos que son chicas.
export function onlygirls(students){
    const girls = students.filter(student => student.gender == 'female')
    console.table(girls)
}

// ### 7- Mostrar por consola el número de chicos y chicas que hay en la clase.

export function totalBoysGirls(students){
    //para chicos
    const boys = students.filter(studentBoy => studentBoy.gender == 'male')
    console.log("En clase hay esta cantidad de Varones: ")
    console.log(boys.length)
    // para chicas
    const girls = students.filter(studentGirl => studentGirl.gender == 'female')
    console.log("En clase hay esta cantidad de Mujeres: ")
    console.log(girls.length)
}

// ### 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
export function allgirls(students) {
    let allGirls = students.reduce((prevVal, student) => (prevVal && student.gender == "female"), true);
    console.log("Todos los miembros de la clase son mujeres?: ")
    console.log(allGirls);
}

// ### 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
export function onlyYoung(students) {
    const youngs = students.filter((young) => young.age >= 20 && young.age <= 25)
    console.table(youngs)
}

// // ### 10 - Añadir un alumno nuevo con los siguientes datos:
export function newRandomStudent(students) {
    const genderIdx = getRandomArbitrary(0, availableGenders.length);
    const gender = availableGenders[genderIdx];
    let name;

    if (gender == 'female') {
        const nameIdx = getRandomArbitrary(0, availableFemaleNames.length);
        name = availableFemaleNames[nameIdx];

    }

    if (gender == 'male') {
        const nameIdx = getRandomArbitrary(0, availableMaleNames.length);
        name = availableMaleNames[nameIdx];
    }
    const age = getRandomArbitrary(20,50);

    const newStudent = {
        name: name,
        age: age,
        gender: gender,
        examScores: [],
    }
    students.push(newStudent);

    console.log("Un estudiante fué agregado aleatoriamente11.")
    return students;
}

// ### - 11- Mostrar por consola el nombre de la persona más joven de la clase.
export function getYoungest(students) {
    let youngest = null;
    for (const student of students) {
        if (youngest == null) 
            youngest = student;
        else {
            if (student.age < youngest.age) 
                youngest = student;
        }
    }

    console.log("El estudiante mas joven es: ")
    console.log(youngest.name);
}

// 12- Mostrar por consola la edad media de todos los alumnos de la clase.
export function getMeanAge(students) {
    let ageSum = 0;
    for (const student of students) {
        ageSum += student.age;
    }
    const meanAge = ageSum / students.length;

    console.log("La edad media de todos los alumnos es: ")
    console.log(meanAge);
}

// 13- Mostrar por consola la edad media de las chicas de la clase.
export function getGirlsMeanAge(students) {
    const girls = students.filter(studentGirl => studentGirl.gender == 'female')
    let ageSum = 0;
    for (const girl of girls) {
        ageSum += girl.age;
    }
    const meanAge = ageSum / girls.length;

    console.log("La edad media de todas las chicas: ")
    console.log(meanAge);
}

// 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, 
// tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
export function addNewEvaluation(students) {
    for (let i = 0; i < students.length; i++ ) {
        const randomEvaluation = getRandomArbitrary(0,11);
        students[i].examScores.push(randomEvaluation);
    }
    console.log("Se agrego una nueva evaluación a todos los alumnos.")
    return students
}

// 15- Ordenar el array de alumnos alfabéticamente según su nombre.
export function sortByName(students) {
    students.sort((student1, student2) => student1.name.toLowerCase() < student2.name.toLowerCase() ? -1 : 1);
    console.log("Los estudiantes fueron ordenados.")
    return students
}

// 16- Mostrar por consola el alumno de la clase con las mejores notas.
export function sumOfArray(arr) {
    let sum = 0;
    for (const el of arr) {
        sum += el;
    }
    return sum;
}

export function getBestStudent(students) {
    let best = null;
    for (const student of students) {
        if (best == null) best = student
        else {
            if (sumOfArray(student.examScores) > sumOfArray(best.examScores)) {
                best = student;
            }
        }
    }
    console.log("El mejor alumno es: ")
    console.log(best.name);
}

// 17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
export function getMeanOfArray(arr) {
    return sumOfArray(arr) / arr.length;
}

export function getBestStudent2(students) {
    let best = null;
    for (const student of students) {
        if (best == null) best = student
        else {
            if (getMeanOfArray(student.examScores) > getMeanOfArray(best.examScores)) {
                best = student;
            }
        }
    }
    console.log("El mejor alumno es: ")
    console.log(best.name);
}

// 18- Añadir un punto extra a cada nota existente de todos los alumnos. 
// Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.
export function addExtraPoint(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].examScores.length == 0) {
            students[i].examScores.push(10)
        } else {
            for (let i2 = 0; i2 < students[i].examScores.length; i2++) {
                if (students[i].examScores[i2] < 10) students[i].examScores[i2] += 1
            }
        }
    }
    console.log("Se añadio un punto a todas las notas.")
    return students;
}