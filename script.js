const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const somar = document.getElementById("somar")
const subtrair = document.getElementById("subtrair")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")
const formulario = document.getElementById("formulario")

function somador(){
    if (numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
        formulario.classList.add("somar")
        formulario.classList.remove("subtrair")
        formulario.classList.remove("multiplicar")
        formulario.classList.remove("dividir")
    }else{
        alert("Preencha todos os campos!!")
    }
}

function subtrador(){
    if (numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) - parseInt(numero2.value)
        formulario.classList.add("subtrair")
        formulario.classList.remove("somar")
        formulario.classList.remove("multiplicar")
        formulario.classList.remove("dividir")
    }else{
        alert("Preencha todos os campos!!")
    }
}
function multiplicador(){
    if (numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
        formulario.classList.add("multiplicar")
        formulario.classList.remove("somar")
        formulario.classList.remove("subtrair")
        formulario.classList.remove("dividir")
    }else{
        alert("Preencha todos os campos!!")
    }
}
function dividendo(){
    if (numero1.value !== '' && numero2.value !== ''){
        resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
        formulario.classList.add("dividir")
        formulario.classList.remove("multiplicar")
        formulario.classList.remove("somar")
        formulario.classList.remove("subtrair")
    }else{
        alert("Preencha todos os campos!!")
    }
}

somar.addEventListener("click", somador)
subtrair.addEventListener("click", subtrador)
multiplicar.addEventListener("click", multiplicador)
dividir.addEventListener("click", dividendo);