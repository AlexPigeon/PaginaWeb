import data from './data.js'


const divMain = document.getElementById("main")  
console.log(data)



data.map((data) => {
    divMain.innerHTML += `<div class="flex">
                            <div class ="pic">
                            <img src=${data.img}>
                            </div>
                            <div class ="data">
                             <h1>${data.title}</h1>
                             <h2>${data.price}$<h2>
                             <p>${data.desc}</p>
                             <hr>
                             </div>
                            </div>`
  
})

const platillos = document.getElementById("platillos")
const postres = document.getElementById("postres")
const bebidas = document.getElementById("bebidas")
const todos = document.getElementById("todos")

platillos.addEventListener('click', Platillos)
postres.addEventListener('click', Postres)
bebidas.addEventListener('click', Bebidas)
todos.addEventListener('click', Todos)

function Platillos(evento){

    divMain.innerHTML = ""

    let categoryfiltrada = 'platillo'
    let filtrados = data.filter((data) => data.category === categoryfiltrada)
    filtrados.forEach((data) => {
        divMain.innerHTML += `<div class="flex">
                                <div class ="pic">
                                <img src=${data.img}>
                                </div>
                                <div class ="data">
                                 <h1>${data.title}</h1>
                                 <h2>${data.price}$<h2>
                                 <p>${data.desc}</p>
                                 </div>
                                </div>`
      
    })
    
}

function Postres(evento){

    divMain.innerHTML = ""

    let categoryfiltrada = 'postre'
    let filtrados = data.filter((data) => data.category === categoryfiltrada)
    filtrados.forEach((data) => {
        divMain.innerHTML += `<div class="flex">
                                <div class ="pic">
                                <img src=${data.img}>
                                </div>
                                <div class ="data">
                                 <h1>${data.title}</h1>
                                 <h2>${data.price}$<h2>
                                 <p>${data.desc}</p>
                                 </div>
                                </div>`
      
    })
    
}

function Bebidas(evento){

    divMain.innerHTML = ""

    let categoryfiltrada = 'bebida'
    let filtrados = data.filter((data) => data.category === categoryfiltrada)
    filtrados.forEach((data) => {
        divMain.innerHTML += `<div class="flex">
                                <div class ="pic">
                                <img src=${data.img}>
                                </div>
                                <div class ="data">
                                 <h1>${data.title}</h1>
                                 <h2>${data.price}$<h2>
                                 <p>${data.desc}</p>
                                 </div>
                                </div>`
      
    })
    
}

function Todos(evento){

    divMain.innerHTML = ""
    data.map((data) => {
        divMain.innerHTML += `<div class="flex">
                                <div class ="pic">
                                <img src=${data.img}>
                                </div>
                                <div class ="data">
                                 <h1>${data.title}</h1>
                                 <h2>${data.price}$<h2>
                                 <p>${data.desc}</p>
                                 </div>
                                </div>`
      
    })
    
    
}

