Window.onload = generateFirstQuestion()

funtion generateFirstQuestion() {
var a = Math.floor(Math.random() * 11);
document.getElementById("first number").innerHTML = a;

