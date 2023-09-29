const arreloDeBotones = document.querySelectorAll("button")
const numeroHtml = document.querySelector(".flex>h2")

let numeroReal = 0
numeroHtml.innerText = numeroReal


function Sumar(sumando){
    numeroReal += sumando
    numeroHtml.innerText = numeroReal
}

arreloDeBotones.forEach((boton)=>{
    boton.addEventListener('click',(evento)=>{
        let numero = Number(evento.target.innerText)
        Sumar(numero)
        console.log(numero)
    })
})