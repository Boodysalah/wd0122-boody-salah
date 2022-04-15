function aggiungiNumero(bot) {
    let numero = bot.innerHTML;
    console.log(numero);

    let disp = document.querySelector(`#schermo`)

    console.log(disp);

    disp.value += numero

}

function uno() {
    let uno = document.querySelector(".uno")
    uno.play()

}
function due() {
    let uno = document.querySelector(".due")
    uno.play()

}
function tre() {
    let uno = document.querySelector(".tre")
    uno.play()

}
function quattro() {
    let uno = document.querySelector(".quattro")
    uno.play()

}
function cinque() {
    let uno = document.querySelector(".cinque")
    uno.play()

}
function sette() {
    let uno = document.querySelector(".sette")
    uno.play()

}
function otto() {
    let uno = document.querySelector(".otto")
    uno.play()

}
function nove() {
    let uno = document.querySelector(".nove")
    uno.play()

}
function zero() {
    let uno = document.querySelector(".zero")
    uno.play()

}
function per() {
    let uno = document.querySelector(".per")
    uno.play()

}
function deviso() {
    let uno = document.querySelector(".deviso")
    uno.play()

}
function uguale() {
    let uno = document.querySelector(".uguale")
    uno.play()

}
function meno() {
    let uno = document.querySelector(".meno")
    uno.play()

}
function canc() {
    let uno = document.querySelector(".canc")
    uno.play()

}
function piu() {
    let uno = document.querySelector(".piu")
    uno.play()

}
function sei() {
    let uno = document.querySelector(".sei")
    uno.play()

}







function risultato() {
    let disp = document.querySelector(`#schermo`)

    let total = eval(disp.value)

    disp.value = total


}
function cancella() {

    let disp = document.querySelector(`#schermo`)

    disp.value = ` `


}

function cambiaColore() {

    var min = 0;
    var max = 255;


    var red = Math.floor(Math.random() * (max - min + 1)) + min;
    var green = Math.floor(Math.random() * (max - min + 1)) + min;
    var blue = Math.floor(Math.random() * (max - min + 1)) + min;


    document.querySelector("#calcolatrice").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}

function testo(params) {
    let disp = document.querySelector(`#schermo`)
    disp.value = "hello, I'm blind-friendly"



}


function setOra() {
    var data = new Date();
    var ore = data.getHours();
    var minuti = data.getMinutes();
    var secondi = data.getSeconds();

    document.getElementById("orario").innerHTML = ore + ":" + minuti + ":" + secondi

}

setInterval(setOra, 1000)





let clicco = document.querySelector(".put1")

clicco.addEventListener("Keyup", function () {
    alert(`ciao`)
})
