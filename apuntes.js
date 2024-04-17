// "let" es una forma de crear arreglos que son versatiles y pueden ser cambiados en cualquier momento

if (edad >= 18){
    console.log("USTED ES MAYOR DE EDAD")
}

if (edad < 18){
    conhsole.log("USTED ES MENOR DE EDAD")
}

for(let index = 0 ; index > 10; index++){
}

let ListaDeNumeros = [1,2,3,4,5]

ListaDeNumeros.push(500) // Agrega un valor al final del arreglo
ListaDeNumeros.pop() // Quita el último valor del arreglo
ListaDeNumeros.shift() // Quita el primer valor del arreglo


// Concepto "Key / Value" - "llave / valor"
let persona = {
    nombre: "javier" , 
    apellido: "barrientos" ,
    edad: 30
}

// Recorre la lista de numeros anterior valor por valor.
ListaDeNumeros.forEach( (value) => {
    console.log(value)
})


// Sumar numeros par en una lista que a la vez es recorrida por un "for"
let numeros = [2,10,3,24,11,16]

let suma = 0
numeros.forEach( (value) => {
    if ((value%2) == 0){
        suma = suma + value
    }
})

console.log("Suma total", suma)

// ------------ // 
// Forma de una función en .js

function esMayor(edad) {
    if (edad < 18) {
        return false
    } else {
        return true
    }
}

if (esMayor(2)) {
    console.log("es meyor de edad")
}

// ------------ // 
// Spread operator en arrays y objetos -- Concepto relacionado con la union de listas u objetos.
// En este constexto, los arreglos creados con "const" quiere decir que son "constantes" y por tanto no podran ser cambiados posteriormente a ser creados

const arregloNombre = ["jean", "carlos", "juan"]
const arregloEdades = [1,2,3]

const arregloUnificado = [...arregloNombre , ...arregloEdades]
console.log(arregloUnificado)



const auto = {
    modelo : "x",
    año: "2001",
    color:"rojo"
}

const animal = {
    nombre: "gato",
    edad : 2
}

console.log(auto)
console.log(animal)

auto_mas_animal = [...auto,...animal]
console.log(auto_mas_animal)


// ------------ // 
// COncepto de deconstruccion de arreglos y objetos

const{nombre} = animal
console.log(nombre)



const array1 = ["hola" , "ciao"]
const array2 = ["hello" , "bye"]

const arrayUnido = [...array1,...array2]
console.log(arrayUnido)

const [a] = arrayUnido

console.log[a]

// ------------ // 
// Manipulacion del DOM

// Acceder a elementos
// const element = document.getElementById('ID')
// const element = document.getElementsByClassName('CLASE')

// Modificar contenido de un elemento
//element.textContent = 'new content'

// Modificar estilos


const TitutloDeLaPagina = document.getElementById("titulo")

// Creación de eventos .js

const button1 = document.getElementById("button_1")
button1.addEventListener('click', () => {
    console.log("El boton ha sido clickeado")
});

// Ejercicio de boton autoincremental

suma1 = 0
const contador = document.getElementById("contador")
const sumador = document.getElementById("sumador")
sumador.addEventListener('click' , () => {
    suma1 = suma1 + 1
    contador.textContent = "Contador :" + suma1
    console.log(suma1)
});

const restador = document.getElementById("restador")
restador.addEventListener('click' , () => {
    suma1 = suma1 - 1
    contador.textContent = "Contador :" + suma1
    console.log(suma1)
})