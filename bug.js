// codigo que no funciona

// const calcularpromedio = (numeros) => {
// let sumarTotal = 0;

// for (let i =0; i <= numeros.lenght; i++) {
//     sumarTotal += numeros[i];
// }

// const promedio = sumarTotal / numeros.lenght;
// return promedio;
// };
// const listaNumeros = [1, 2, 3, 4 ,5];
// const promedioNumeros = calcularpromedio(listaNumeros);

// codigo con la solucion

const listaNumeros = [1, 2, 3, 4 ,5];

const calcularPromedio = (numeros) => {
    let sumarTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumarTotal += numeros[i];
    }
    const promedio = sumarTotal / numeros.length;
    return promedio;
    };
   
    const promedioNumeros = calcularPromedio(listaNumeros);
    console.log("El promedio es: " + promedioNumeros);