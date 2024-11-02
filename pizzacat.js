const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center";
greeting.style.marginTop = "60px";
greeting.style.fontSize = "50px";
greeting.style.color = "#1E7421";
const username = window.prompt("what's your name?", "Pumpkin");
greeting.innerHTML = "Welcome to my site, " + username + "!";
