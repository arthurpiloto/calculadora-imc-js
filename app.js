`use strict`

function mostrarResultado () {
    const nome = document.getElementById(`nome`).value
    const altura = document.getElementById(`altura`).value
    const peso = document.getElementById(`peso`).value
    const imcForm = document.getElementById(`imc-form`)

    console.log(imcForm.reportValidity())

    console.log(`nome: ${nome}`)
    console.log(`peso: ${peso}`)
    console.log(`altura: ${altura}`)
    
}

const calcular = document.getElementById(`calcular`).addEventListener(`click`, mostrarResultado)