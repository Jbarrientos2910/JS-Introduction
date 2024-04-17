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