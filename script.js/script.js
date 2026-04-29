function ejercicio1() {
    alert("Hello World");
}

function ejercicio2() {
    document.getElementById("resultado").innerHTML = "Hello World";
}

function ejercicio3() {
    document.getElementById("resultado").innerHTML = 3 + 5;
}

function ejercicio4() {
    let nombreUsuario = prompt("¿Cuál es tu nombre?");
    document.getElementById("resultado").innerHTML = "Hola " + nombreUsuario;
}

function ejercicio5() {
    let numero6 = prompt("Ingresa el primer número:");
    let numero9 = prompt("Ingresa el segundo número:");
    document.getElementById("resultado").innerHTML = "La suma es: " + (Number(numero6) + Number(numero9));
}
