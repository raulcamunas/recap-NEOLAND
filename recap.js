// EJERCICIO 1

for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }

// EJERCICIO 2

for (let i = 100; i >= 0; i -= 5) {
    console.log(i);
}

// EJERCICIO 3

let numerosAleatorios = [1, 2, 3, 5, 6, 7, 234, 526, 345346, 453534535435]

console.log("Numeros aleatorios en el array:", numerosAleatorios)

for (let i = 0; i < numerosAleatorios.length; i++) {
    console.log("Numero aleatorio fuera del Array:", numerosAleatorios[i])
}

// EJERCICIO 4

let colores = ["azul", "verde", "rosa", "naranja", "rojo", "marron"]

let colorNumero3 = colores[3]
console.log(colorNumero3)

// EJERCICIO 5

let primerCaracter = colores[0][0]
console.log(primerCaracter)

// EJERCICIO 6

let	frase = ["posiciones", "se cuentan", "Las", "array", "cero.", "a partir", "del"];
let fraseOrdenada =  frase[2].concat(" ",frase[0]).concat(" ",frase[1]).concat(" ", frase[5]).concat(" ", frase[6],).concat(" ", frase[4])

console.log(fraseOrdenada)

// EJERCICIO 7

let array1 = ["hola", "buenas"]
let array2 = ["como", "estas?"]

function unirArrays(arr1, arr2) { 
        return arr1 + arr2; 
    } 
let arrayUnido = unirArrays(array1, array2); console.log(arrayUnido);

unirArrays()

// EJERCICIO 8

let array3 = ["quien", "eres"]
let array4 = ["soy", "raul"]

function cambiarUltimoElemento(array3, array4){
    if (array1.length > 0){
        let ultimoElemento = array3.pop();

        array4.push(ultimoElemento)
    } else {
        console.log("El primer array está vacío. No se puede transferir ningún elemento.")
    }
}

cambiarUltimoElemento(array3, array4)
console.log(array3);
console.log(array4);

// EJERCICIO 9

let array5 = [1, 2, [3, 4]];
let array6 = [1, 2, [3, 4, [5, 6]]];
let array7 = [1, 2, [3, 4, [5, 6, [3, 5]]]]

// a. Convertir array1 en un solo array
let resultadoA = [].concat(...array5);
console.log("a. Resultado:", resultadoA);

// b. convertir array2 en un array con los 4 primeros elementos del array y un subarray anidado del último [5,6]
let resultadoB = array6.slice(0, 3).concat(array6[2]);
console.log("b. Resultado:", resultadoB);

// c. convertir array3 en un solo array
let newArray7 = array7.flat(Infinity);

console.log("c. Raultado:", newArray7);

// EJERCICIO 10

let colores2 = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];

colores2.sort((a, b) => b.localeCompare(a));

console.log(colores2);

// EJERCICIO 11

let numeros2 = [40, 100, 1, 5, 25, 10];

numeros2.sort((a, b) => a - b)

console.log(numeros2)

// EJERCICIO 12

function fibonacci(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray.slice(0, n);
}
let n = 10; 
let fibSeries = fibonacci(n);
console.log(fibSeries);

// EJERCICIO 13

function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit
}

let temperaturaCelsius = 12
let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius)

console.log(temperaturaCelsius + " Grados Celsius son " + "temperatura Fahrenheit. ")

// EJERCICIO 14

let celsiusToFahrenheit2 = celsius2 => (celsius2 * 1.8) + 32;

let temperaturaCelsius2 = 25
let temperaturaFahrenheit2 = celsiusToFahrenheit2(temperaturaCelsius2)
console.log(`${temperaturaCelsius2} grados Celsius son ${temperaturaFahrenheit2} grados Fahrenheit.`);

