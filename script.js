Window.onload = generateFirstQuestion()

funtion generateFirstQuestion() {
var a = Math.floor(Math.random() * 51);
document.getElementById("first number").innerHTML = a;

