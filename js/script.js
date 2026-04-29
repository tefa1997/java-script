function ejercicio1() {
    alert("Hello World");
    console.log("Hello World");
}

function ejercicio2() {
    document.getElementById("resultado").innerHTML = "Hello World";
    console.log("Hello World");
}

function ejercicio3() {
    document.getElementById("resultado").innerHTML = 3 + 5;
    console.log(3 + 5);
}

function ejercicio4() {
    let nombreUsuario = prompt("¿Cuál es tu nombre?");
    document.getElementById("resultado").innerHTML = "Hola " + nombreUsuario;
    console.log("Hola " + nombreUsuario);
}

function ejercicio5() {
    let numero1 = prompt("Ingresa el primer número:");
    let numero2 = prompt("Ingresa el segundo número:");
    let suma = Number(numero1) + Number(numero2);
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;
    console.log("La suma es: " + suma);
}



