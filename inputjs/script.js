//document.write("Hello world");
//document.write("<h1>Lype<h1>");

const botao = document.querySelector("#botaosalvar");
botao.addEventListener("click", function(e){
    e.preventDefault()

    const textoDigitado = document.querySelector("#valorDigitado");

    document.getElementById("texto").innerHTML = textoDigitado.value
})
