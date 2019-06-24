//type coericion will change the id tag between 1 and 0 depending on the activePlayer
document.querySelector("#current-" + activeplayer).textContent = dice;
//changes the elements textContent so the text content of #current- is now the value of var dice

//innerHTML changes the whole html tag

document.querySelector("#current-" + activeplayer).innerHTML =
  "<b>" + dice + "</b>";

//reading value into the console
var x = document.querySelector("#score-0").textContent;
console.log(x);

//changing css
document.querySelector(".dice").style.display = "none";
