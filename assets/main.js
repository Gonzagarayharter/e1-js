// EJ 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// function esPar(number) {
//     number % 2 === 0 ? console.log(`El número ${number} es par`) : console.log(`El número ${number} es impar`);
// }

// esPar(10);
// esPar(3);

// EJ 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// function esMayor(number1, number2) {
//     if (number1 > number2) {
//         console.log(`El número ${number1} es mayor al ${number2}`);
//      }else if (number1 === number2) {
//         console.log(`El número ${number1} es igual al ${number2}`);
//     } else {
//         console.log(`El número ${number2} es mayor al ${number1}`);
//     }
// }

// esMayor(15, 10);
// esMayor(20, 20);
// esMayor(4, 20);

// EJ 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function multiploDe5(number) {
//     if (number % 5 === 0) {
//         console.log(`El número ${number} es múltiplo de 5`);
//     } else {
//         console.log(`El número ${number} no es múltiplo de 5`);
//     }
// }

// multiploDe5(50);
// multiploDe5(25);
// multiploDe5(13);
// multiploDe5(6);

// EJ 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function numerosDesde0(number) {
//     for (let i = 0; i <= number; i++) {
//         console.log(i);
//     }
// }

// numerosDesde0(14);

// EJ 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function imprimirPalabra(palabra, number) {
//     for (let i = 0; i < number; i++) {
//         console.log(palabra);
//     }
// }

// imprimirPalabra('Javascript', 5);

// EJ 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// function valoresArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// valoresArr(['Codear', 10, true, 'Aprendiendo en Nucba']);

// EJ 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// function arrNumeros(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] !== arr[4] && console.log(arr[i]);
//     }
// }

// arrNumeros([0, 1, 2, 3, 4, 5, 6, 7 , 8, 9]);

// EJ 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// function arrNumeros(arr, number) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] * number);
//     }
// }

// arrNumeros([2, 4, 6, 8, 10], 2);